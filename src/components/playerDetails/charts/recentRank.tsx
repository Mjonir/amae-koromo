import React from "react";
import { ResponsiveContainer, LineChart, Line, Dot, Tooltip, YAxis, TooltipProps } from "recharts";

import { IDataAdapter } from "../../gameRecords/dataAdapterProvider";
import { GameRecord, RANK_LABELS, RANK_COLORS, GameMode, Level } from "../../../data/types";
import { useMemo } from "react";
import { Player } from "../../gameRecords/player";
import Loading from "../../misc/loading";
import { calculateDeltaPoint } from "../../../data/types/metadata";

declare module "recharts" {
  interface DotProps {
    strokeWidth?: number;
    stroke?: string;
    fill?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
  }
  interface LabelListProps {
    fill?: string;
  }
}

type DotPayload = {
  pos: number;
  rank: number;
  delta: number;
  cumulativeDelta: number;
  game: GameRecord;
  playerId: number;
};

const createDot = (props: { payload: DotPayload }, active?: boolean) => {
  return (
    <Dot
      {...props}
      r={5}
      stroke={RANK_COLORS[props.payload.rank]}
      onClick={() => window.open(GameRecord.getRecordLink(props.payload.game, props.payload.playerId), "_blank")}
      {...(active ? { fill: RANK_COLORS[props.payload.rank], r: 10 } : {})}
    />
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createActiveDot = (props: any) => createDot(props, true);

const RankChartTooltip = ({ active, payload }: TooltipProps = {}) => {
  if (!active || !payload || !payload.length) {
    return null;
  }
  const realPayload = payload[0].payload as DotPayload;
  return (
    <div className="player-chart-tooltip">
      <h5>
        {GameRecord.formatFullStartTime(realPayload.game)} {GameMode[realPayload.game.modeId]}{" "}
        {RANK_LABELS[realPayload.rank]} {realPayload.delta > 0 ? "+" : ""}
        {realPayload.delta}pt
      </h5>
      {realPayload.game.players.map(x => (
        <p key={x.accountId.toString()}>
          <Player player={x} game={realPayload.game} isActive={realPayload.playerId === x.accountId} />
        </p>
      ))}
    </div>
  );
};

export default function RecentRankChart({
  dataAdapter,
  playerId,
  aspect = 2,
  numGames = 20
}: {
  dataAdapter: IDataAdapter;
  playerId: number;
  aspect?: number;
  numGames?: number;
}) {
  const dataPoints = useMemo(() => {
    const result = [] as DotPayload[];
    const totalGames = dataAdapter.getCount();
    if (!totalGames) {
      return result;
    }
    for (let i = 0; i < Math.min(totalGames, numGames); i++) {
      const game = dataAdapter.getItem(i);
      if (!("uuid" in game)) {
        break;
      }
      const rank = GameRecord.getRankIndexByPlayer(game, playerId);
      result.unshift({
        pos: 3 - rank,
        rank,
        delta: 0,
        cumulativeDelta: 0,
        game,
        playerId
      });
    }
    let delta = 0;
    for (const point of result) {
      const game = point.game;
      const playerRecord = game.players.filter(x => x.accountId.toString() === playerId.toString())[0];
      point.delta = calculateDeltaPoint(playerRecord.score, point.rank, game.modeId, new Level(playerRecord.level));
      delta += point.delta;
      point.cumulativeDelta = delta;
    }
    return result;
  }, [dataAdapter, numGames, playerId]);
  if (!dataPoints.length) {
    return <Loading />;
  }
  return (
    <ResponsiveContainer width="100%" aspect={aspect} height="auto">
      <LineChart data={dataPoints} margin={{ top: 15, right: 15, bottom: 15, left: 15 }}>
        <YAxis type="number" domain={["dataMin", "dataMax"]} yAxisId={0} hide={true} />
        <YAxis type="number" domain={["dataMin", "dataMax"]} yAxisId={1} hide={true} />
        <Line
          isAnimationActive={false}
          dataKey="cumulativeDelta"
          type="linear"
          stroke="#969696"
          strokeWidth={1.5}
          yAxisId={1}
          dot={false}
          activeDot={false}
          strokeDasharray="5 5"
        />
        <Line
          isAnimationActive={false}
          dataKey="pos"
          type="linear"
          stroke="#b5c2ce"
          strokeWidth={3}
          dot={createDot}
          activeDot={createActiveDot}
        />
        <Tooltip cursor={false} content={<RankChartTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
}
