import React from "react";
import Sports from "./Sports";

function BasketBall() {
  return (
    <Sports
      title="🏀 Basketball at Butere Boys"
      tagline="Speed • Skill • Precision"

      hero="/images/basketball-main.jpg"

      description={[
        "The Butere Boys basketball team is known for fast-paced gameplay, teamwork, and sharp shooting skills.",
        "Players are trained in dribbling, shooting accuracy, defensive positioning, and tactical awareness.",
        "The team competes strongly in county and regional school tournaments with impressive performances.",
        "Basketball builds discipline, coordination, endurance, and leadership among students."
      ]}

      images={[
        "/images/basketball1.jpg",
        "/images/basketball2.jpg",
        "/images/basketball3.jpg"
      ]}

      trophies={[
        "/images/basketball-trophy1.jpg",
        "/images/basketball-trophy2.jpg"
      ]}

      players={[
        { name: "John Mwangi", position: "Point Guard", stats: "120 assists, 40 steals" },
        { name: "Brian Otieno", position: "Shooting Guard", stats: "95 points scored" },
        { name: "Kevin Ouma", position: "Center", stats: "80 rebounds" }
      ]}

      fixtures={[
        { date: "11 May 2026", opponent: "Kakamega High", result: "Win 65-58" },
        { date: "19 May 2026", opponent: "Mumias Boys", result: "Loss 52-60" },
        { date: "27 May 2026", opponent: "St. Peters", result: "Upcoming" }
      ]}
    />
  );
}

export default BasketBall;