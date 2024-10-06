import preferenceService from "./preferenceService";
import { sortPostsByPreference } from "../algorithms/postSorting";

export async function getSortedFeedPosts() {
  const posts = await fetchPosts();
  const likedPosts = preferenceService.getLikedPosts();

  posts.forEach((post) => {
    post.liked = !!likedPosts[post.id]; // Convert to boolean

    // Remove the post if it is liked
    // When we will connect it to a DB we will remove this line and add a query to select non-liked posts
    if (post.liked) {
      const index = posts.indexOf(post);
      if (index > -1) {
        posts.splice(index, 1);
      }
    }
  });

  const scoredPosts = sortPostsByPreference(posts);

  // Add a randomness factor for posts to determine final order
  const weightedPosts = scoredPosts.map((post) => {
    // Higher scores have less randomness
    const randomFactor = Math.random() ** 2 * 2 * (1 - post.score / 100);
    return {
      ...post,
      weightedScore: post.score + randomFactor, // Add a random factor to the score
    };
  });

  // Sort the posts based on the weighted score (higher scores at the top)
  return weightedPosts.sort((a, b) => b.weightedScore - a.weightedScore);
}
async function fetchPosts() {
  return [
    // Barcelona Posts
    {
      id: 1,
      team: "Barcelona",
      title: "Match Report",
      content:
        "Barcelona secures a thrilling 3-2 victory against Atletico Madrid.",
    },
    {
      id: 2,
      team: "Barcelona",
      title: "Transfer News",
      content: "Barcelona signs new midfielder from Ajax for €70 million.",
    },
    {
      id: 3,
      team: "Barcelona",
      title: "Injury Update",
      content:
        "Barcelona’s star striker is out for 3 weeks due to a muscle injury.",
    },
    {
      id: 4,
      team: "Barcelona",
      title: "Player of the Month",
      content: "Messi named Player of the Month for the 10th consecutive time.",
    },
    {
      id: 5,
      team: "Barcelona",
      title: "Match Preview",
      content:
        "Barcelona prepares for the upcoming El Clasico against Real Madrid.",
    },
    {
      id: 6,
      team: "Barcelona",
      title: "Team Training",
      content:
        "Barcelona players are back in training ahead of the Champions League.",
    },
    {
      id: 7,
      team: "Barcelona",
      title: "Youth Academy",
      content: "Promising talents emerge from La Masia to join the first team.",
    },
    {
      id: 8,
      team: "Barcelona",
      title: "Tactical Analysis",
      content:
        "Analyzing Barcelona’s new high-press system under their new coach.",
    },
    {
      id: 9,
      team: "Barcelona",
      title: "Season Goals",
      content:
        "Barcelona aims to secure both La Liga and the Champions League.",
    },
    {
      id: 10,
      team: "Barcelona",
      title: "Top Performers",
      content: "Top performers this season: Messi, Ansu Fati, and Ter Stegen.",
    },

    // Real Madrid Posts
    {
      id: 11,
      team: "Real Madrid",
      title: "New Signing",
      content:
        "Real Madrid signs Brazilian wonderkid as a future star forward.",
    },
    {
      id: 12,
      team: "Real Madrid",
      title: "Match Preview",
      content: "Real Madrid faces a tough challenge against Bayern Munich.",
    },
    {
      id: 13,
      team: "Real Madrid",
      title: "Match Report",
      content: "Real Madrid dominates Sevilla with a 4-1 win in La Liga.",
    },
    {
      id: 14,
      team: "Real Madrid",
      title: "Injury News",
      content: "Benzema returns to training ahead of the crucial derby clash.",
    },
    {
      id: 15,
      team: "Real Madrid",
      title: "Youth Talent",
      content: "Real Madrid promotes 2 academy players to the senior team.",
    },
    {
      id: 16,
      team: "Real Madrid",
      title: "Tactical Changes",
      content:
        "Analyzing Real Madrid’s defensive structure against high-press teams.",
    },
    {
      id: 17,
      team: "Real Madrid",
      title: "Goal of the Month",
      content:
        "Vinicius Jr. wins Goal of the Month with a stunning solo effort.",
    },
    {
      id: 18,
      team: "Real Madrid",
      title: "Champions League",
      content:
        "Real Madrid is drawn against Manchester City in the knockout stages.",
    },
    {
      id: 19,
      team: "Real Madrid",
      title: "Transfer Rumors",
      content: "Rumors link Real Madrid to a summer move for Kylian Mbappe.",
    },
    {
      id: 20,
      team: "Real Madrid",
      title: "El Clasico Preview",
      content: "Real Madrid gears up for the highly anticipated El Clasico.",
    },

    // Manchester United Posts
    {
      id: 21,
      team: "Manchester United",
      title: "New Manager",
      content: "Manchester United appoints a new head coach on a 3-year deal.",
    },
    {
      id: 22,
      team: "Manchester United",
      title: "Player of the Month",
      content:
        "Bruno Fernandes wins Player of the Month award for the 5th time.",
    },
    {
      id: 23,
      team: "Manchester United",
      title: "Match Report",
      content:
        "Manchester United thrashes Arsenal 5-0 in a dominant performance.",
    },
    {
      id: 24,
      team: "Manchester United",
      title: "Transfer News",
      content: "United secures Jadon Sancho for a record-breaking fee.",
    },
    {
      id: 25,
      team: "Manchester United",
      title: "Training Update",
      content:
        "Rashford and Pogba are back in training after recovering from injuries.",
    },
    {
      id: 26,
      team: "Manchester United",
      title: "Fan Engagement",
      content: "United announces a virtual meet and greet for global fans.",
    },
    {
      id: 27,
      team: "Manchester United",
      title: "Legend’s Perspective",
      content: "Club legend Scholes gives his views on United’s title chances.",
    },
    {
      id: 28,
      team: "Manchester United",
      title: "Derby Preview",
      content:
        "Manchester United set to clash with Manchester City in the derby.",
    },
    {
      id: 29,
      team: "Manchester United",
      title: "European Night",
      content: "United faces off against PSG in the Champions League.",
    },
    {
      id: 30,
      team: "Manchester United",
      title: "Top Performers",
      content:
        "Top performers this season: Bruno Fernandes, Rashford, and Shaw.",
    },

    // Juventus Posts
    {
      id: 31,
      team: "Juventus",
      title: "Ronaldo’s Record",
      content: "Cristiano Ronaldo sets a new record for most goals in Serie A.",
    },
    {
      id: 32,
      team: "Juventus",
      title: "New Signing",
      content:
        "Juventus signs young Italian defender to bolster their backline.",
    },
    {
      id: 33,
      team: "Juventus",
      title: "Match Report",
      content: "Juventus wins a crucial 2-1 match against AC Milan.",
    },
    {
      id: 34,
      team: "Juventus",
      title: "Youth Development",
      content: "Juventus invests in youth academy to nurture future talents.",
    },
    {
      id: 35,
      team: "Juventus",
      title: "Tactical Analysis",
      content:
        "Examining Juventus’ new attacking strategies under the new coach.",
    },
    {
      id: 36,
      team: "Juventus",
      title: "Player of the Week",
      content:
        "Dybala named Player of the Week for his outstanding performance.",
    },
    {
      id: 37,
      team: "Juventus",
      title: "Match Preview",
      content: "Juventus is set to face Napoli in a high-stakes Serie A match.",
    },
    {
      id: 38,
      team: "Juventus",
      title: "Transfer Update",
      content:
        "Rumors suggest Juventus is eyeing a move for an English midfielder.",
    },
    {
      id: 39,
      team: "Juventus",
      title: "Squad Update",
      content:
        "Juventus announces a 25-man squad for the upcoming Champions League.",
    },
    {
      id: 40,
      team: "Juventus",
      title: "Legend Returns",
      content: "Former Juventus captain returns to join the coaching staff.",
    },

    // Bayern Munich Posts
    {
      id: 41,
      team: "Bayern Munich",
      title: "Match Report",
      content:
        "Bayern Munich defeats Borussia Dortmund in a thrilling 3-2 match.",
    },
    {
      id: 42,
      team: "Bayern Munich",
      title: "Goal Scoring Form",
      content: "Lewandowski continues his goal-scoring spree with a brace.",
    },
    {
      id: 43,
      team: "Bayern Munich",
      title: "Match Preview",
      content:
        "Bayern Munich prepares for the Bundesliga showdown with Leipzig.",
    },
    {
      id: 44,
      team: "Bayern Munich",
      title: "Squad Depth",
      content: "Bayern Munich showcases incredible squad depth this season.",
    },
    {
      id: 45,
      team: "Bayern Munich",
      title: "Player of the Month",
      content: "Neuer named Bundesliga Player of the Month.",
    },
    {
      id: 46,
      team: "Bayern Munich",
      title: "Transfer News",
      content: "Bayern signs a promising young winger from the French league.",
    },
    {
      id: 47,
      team: "Bayern Munich",
      title: "Injury Update",
      content: "Bayern’s midfielder is out for 6 weeks due to a ligament tear.",
    },
    {
      id: 48,
      team: "Bayern Munich",
      title: "Tactical Changes",
      content: "Bayern’s new pressing strategy is proving highly effective.",
    },
    {
      id: 49,
      team: "Bayern Munich",
      title: "Title Race",
      content:
        "Bayern Munich maintains a strong lead in the Bundesliga title race.",
    },
    {
      id: 50,
      team: "Bayern Munich",
      title: "Training Session",
      content: "Bayern Munich’s open training session draws huge crowds.",
    },
    {
      id: 51,
      team: "Los Angeles Lakers",
      title: "Game Recap",
      content:
        "Lakers overcome the Golden State Warriors in a nail-biting finish, 110-108.",
    },
    {
      id: 52,
      team: "Chicago Bulls",
      title: "Trade News",
      content:
        "Chicago Bulls acquire a new point guard in a mid-season trade with the New York Knicks.",
    },
    {
      id: 53,
      team: "Team USA",
      title: "Tournament Win",
      content:
        "Team USA wins the international volleyball tournament, defeating Brazil in the final match.",
    },
    {
      id: 54,
      team: "Brazil Volleyball",
      title: "Player Retirement",
      content:
        "Brazilian volleyball legend announces retirement after an illustrious 15-year career.",
    },
    {
      id: 55,
      team: "Toronto Maple Leafs",
      title: "Playoff Update",
      content:
        "Toronto Maple Leafs advance to the conference finals after defeating the Montreal Canadiens.",
    },
    {
      id: 56,
      team: "New York Rangers",
      title: "Captain's Milestone",
      content:
        "Rangers' captain reaches 500 career points, marking a new milestone for the team.",
    },
  ];
}
