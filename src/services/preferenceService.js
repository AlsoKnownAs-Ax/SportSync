// src/services/preferenceService.js

export default {
  getPreferences() {
    return JSON.parse(localStorage.getItem("userPreferences")) || {};
  },

  getLikedPosts() {
    return JSON.parse(localStorage.getItem("likedPosts")) || {};
  },

  updatePreference(postId, teamName) {
    let preferences = this.getPreferences();
    preferences[teamName] = (preferences[teamName] || 0) + 1;
    localStorage.setItem("userPreferences", JSON.stringify(preferences));

    // Mark post as liked in likedPosts
    let likedPosts = this.getLikedPosts();
    likedPosts[postId] = true;
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  },

  unlikePost(postId, teamName) {
    // Update team preferences (decrement)
    let preferences = this.getPreferences();
    if (preferences[teamName] > 0) preferences[teamName] -= 1;
    localStorage.setItem("userPreferences", JSON.stringify(preferences));

    // Remove the like status from likedPosts
    let likedPosts = this.getLikedPosts();
    delete likedPosts[postId];
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  },

  clearPreferences() {
    localStorage.removeItem("userPreferences");
    localStorage.removeItem("likedPosts");
  },
};
