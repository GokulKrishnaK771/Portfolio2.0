import { useEffect, useState, useMemo } from "react";
import { ActivityCalendar } from "react-activity-calendar";

const blueTheme = {
  light: ["#170027", "#6A01A6", "#8100CC", "#8D00DF", "#B659FF"],
  dark: ["#170027", "#6A01A6", "#8100CC", "#8D00DF", "#B659FF"],
};

export default function GitHubContributions() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/GokulKrishnaK771")
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json?.contributions)) {
          setData(json.contributions);
        }
      })
      .catch(console.error);
  }, []);

  const lastFiveMonths = useMemo(() => {
    if (!data) return [];

    const today = new Date();
    const fromDate = new Date();
    fromDate.setMonth(today.getMonth() - 9);

    return data
      .filter((item) => {
        const d = new Date(item.date);
        return d >= fromDate && d <= today;
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [data]);

  if (!data || lastFiveMonths.length === 0) {
    return <div className="text-sm text-zinc-400">Loading…</div>;
  }

  return (
    <div className="reat-activity-graph">
        <ActivityCalendar
          data={lastFiveMonths}
          theme={blueTheme}
          hideColorLegend
          showWeekdayLabels
          showMonthLabels={true}
          blockSize={15}
          blockMargin={3}
          fontSize={12}
          tooltips={{
            activity: {
              text: activity => `${activity.level} activities on ${activity.date}`,
              placement: 'right',
              offset: 6,
              hoverRestMs: 300,
              transitionStyles: {
                duration: 100,
                common: { fontFamily: 'monospace' },
              },
              withArrow: true,
            },
          }}
        />
    </div>
  );
}
