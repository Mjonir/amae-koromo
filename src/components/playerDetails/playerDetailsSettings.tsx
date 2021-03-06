import React from "react";
import { useEffect, useState, useCallback } from "react";
import { FormRow } from "../form/formRow";
import { useModel } from "../gameRecords/model";
import { CheckboxGroup, DatePicker } from "../form";
import dayjs from "dayjs";
import { ModeSelector } from "../gameRecords/modeSelector";
import Conf from "../../utils/conf";

enum DateRangeOptions {
  All = "全部",
  Last4Weeks = "最近四周",
  Custom = "自定义"
}
const DATE_RANGE_ITEMS = Object.keys(DateRangeOptions).map((key: string) => ({
  key: DateRangeOptions[key as keyof typeof DateRangeOptions],
  label: DateRangeOptions[key as keyof typeof DateRangeOptions]
}));

export default function PlayerDetailsSettings({ showLevel = false }) {
  const [model, updateModel] = useModel();
  const [mode, setMode] = useState(() => {
    if (model.type !== "player") {
      return DateRangeOptions.All;
    }
    if (!model.startDate) {
      return DateRangeOptions.All;
    }
    if (
      (!model.endDate || dayjs(model.endDate).isSame(dayjs(), "day")) &&
      dayjs(model.startDate).isSame(dayjs().subtract(27, "day"), "day")
    ) {
      return DateRangeOptions.Last4Weeks;
    }
    return DateRangeOptions.Custom;
  });
  const [customDateFrom, setCustomDateFrom] = useState(() =>
    model.type === "player" && model.startDate ? model.startDate : Conf.dateMin
  );
  const [customDateTo, setCustomDateTo] = useState(() =>
    model.type === "player" && model.endDate ? model.endDate : dayjs()
  );
  useEffect(() => {
    if (model.type !== "player") {
      return;
    }
    switch (mode) {
      case DateRangeOptions.All:
        updateModel({
          type: "player",
          playerId: model.playerId,
          startDate: null,
          endDate: null,
          selectedMode: undefined
        });
        break;
      case DateRangeOptions.Last4Weeks:
        updateModel({
          type: "player",
          playerId: model.playerId,
          startDate: dayjs().subtract(27, "day"),
          endDate: null
        });
        break;
      case DateRangeOptions.Custom:
        updateModel({
          type: "player",
          playerId: model.playerId,
          startDate: customDateFrom,
          endDate: customDateTo
        });
        break;
    }
  }, [model, mode, customDateFrom, customDateTo, updateModel]);
  const setSelectedMode = useCallback(mode => updateModel({ type: "player", selectedMode: mode }), [updateModel]);
  const updateSearchTextFromEvent = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => updateModel({ type: "player", searchText: e.currentTarget.value }),
    [updateModel]
  );
  return (
    <>
      <div className="row">
        <div className="col-6">
          <FormRow title="时间" inline={true}>
            <CheckboxGroup
              type="radio"
              selectedItemKey={mode}
              items={DATE_RANGE_ITEMS}
              groupKey="PlayerDetailsDateRangeSelector"
              onChange={setMode as (x: string) => void}
            />
          </FormRow>
        </div>
        {showLevel && Conf.availableModes.length > 1 && (
          <div className="col-6">
            <FormRow title="等级" inline={true}>
              <ModeSelector mode={model.selectedMode} onChange={setSelectedMode} />
            </FormRow>
          </div>
        )}
      </div>
      {mode === DateRangeOptions.Custom ? (
        <div className="row mt-n3">
          <div className="col-6">
            <FormRow inline={true}>
              <DatePicker
                min={Conf.dateMin}
                onChange={setCustomDateFrom}
                date={customDateFrom}
                className="form-control"
              />
              <DatePicker min={Conf.dateMin} onChange={setCustomDateTo} date={customDateTo} className="form-control" />
            </FormRow>
          </div>
        </div>
      ) : null}
      {model.searchText ? (
        <div className="row mb-3">
          <div className="col-12">
            <FormRow title="查找玩家">
              <input
                type="text"
                className="form-control"
                value={model.searchText}
                onChange={updateSearchTextFromEvent}
              />
            </FormRow>
          </div>
        </div>
      ) : null}
    </>
  );
}
