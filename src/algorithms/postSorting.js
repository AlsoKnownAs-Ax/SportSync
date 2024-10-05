import preferenceService from "../services/preferenceService";

export function sortPostsByPreference(posts) {
  const preferences = preferenceService.getPreferences();

  posts.forEach((post) => {
    post.score = 0;

    // Increase score if the post belongs to a team the user likes
    if (preferences[post.team]) {
      post.score += preferences[post.team];
    }
  });

  return posts.sort((a, b) => b.score - a.score);
}
