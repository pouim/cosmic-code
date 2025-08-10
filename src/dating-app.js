

// 💕 DATING APP ALGORITHM - Finding Love in the Digital Age

class DatingApp {
  constructor() {
    this.users = [];
    this.matches = [];
    this.ghosting_rate = 0.95; // 95% of conversations end in ghosting
    this.success_rate = 0.001; // 0.1% success rate (very optimistic)
  }

  createProfile(userData) {
    // Enhance user data for maximum attractiveness
    const enhancedProfile = {
      ...userData,
      height: userData.height + 2, // Add 2 inches (everyone does)
      age: Math.max(userData.age - 3, 18), // Subtract 3 years
      photos: userData.photos.filter((photo) => photo.hasFilter), // Only filtered photos
      bio: this._generateBio(userData.interests),
      job: this._enhanceJob(userData.job),
      location: userData.location + " (but actually 50 miles away)",
    };

    this.users.push(enhancedProfile);
    return enhancedProfile;
  }

  _generateBio(interests) {
    const bioTemplates = [
      "Love to travel ✈️ (but actually just to the grocery store)",
      "Adventure seeker 🏔️ (Netflix counts as adventure)",
      "Foodie 🍕 (especially pizza and anything that's delivered)",
      "Fitness enthusiast 💪 (I own gym clothes, does that count?)",
      "Dog person 🐕 (I have a dog filter on my photos)",
    ];

    return bioTemplates[Math.floor(Math.random() * bioTemplates.length)];
  }

  _enhanceJob(job) {
    const jobEnhancements = {
      cashier: "Retail Operations Specialist",
      waiter: "Hospitality Professional",
      student: "Academic Professional",
      unemployed: "Freelance Consultant",
      programmer:
        "Software Engineer at a startup (actually just learning to code)",
    };

    return jobEnhancements[job] || job;
  }

  findMatches(userId, radius = 25) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) return [];

    // Algorithm: Find people who are also looking for love (and are desperate)
    const potentialMatches = this.users.filter((otherUser) => {
      return (
        otherUser.id !== userId &&
        otherUser.age >= user.age - 5 &&
        otherUser.age <= user.age + 10 &&
        Math.random() > 0.7
      ); // 30% chance of showing up
    });

    // Sort by attractiveness score (completely arbitrary)
    return potentialMatches
      .sort((a, b) => {
        const scoreA = this._calculateAttractivenessScore(a);
        const scoreB = this._calculateAttractivenessScore(b);
        return scoreB - scoreA;
      })
      .slice(0, 10); // Show top 10 matches
  }

  _calculateAttractivenessScore(profile) {
    let score = 0;

    // Photo quality bonus
    score += profile.photos.length * 10;

    // Bio length bonus (longer = more desperate)
    score += profile.bio.length * 0.5;

    // Job prestige bonus
    if (profile.job.includes("Engineer")) score += 50;
    if (profile.job.includes("Doctor")) score += 100;
    if (profile.job.includes("Consultant")) score += 25;

    // Random factor (because love is random)
    score += Math.random() * 100;

    return score;
  }

  sendMessage(fromUserId, toUserId, message) {
    const conversation = {
      from: fromUserId,
      to: toUserId,
      message: message,
      timestamp: new Date(),
      read: false,
      replied: false,
    };

    // 95% chance of being ghosted
    if (Math.random() < this.ghosting_rate) {
      conversation.replied = false;
      console.log("👻 Message sent into the void...");
    } else {
      conversation.replied = true;
      console.log("💬 Message received! (This is rare)");
    }

    return conversation;
  }

  generatePickupLine() {
    const pickupLines = [
      "Are you a parking ticket? Because you've got FINE written all over you! 😏",
      "Do you like science? Because we have chemistry! 🧪",
      "Are you a magician? Because whenever I look at you, everyone else disappears! ✨",
      "Do you have a map? I keep getting lost in your eyes! 🗺️",
      "Are you made of copper and tellurium? Because you're Cu-Te! 🧬",
    ];

    return pickupLines[Math.floor(Math.random() * pickupLines.length)];
  }

  calculateCompatibility(user1, user2) {
    // Super scientific compatibility algorithm
    let compatibility = 0;

    // Age compatibility
    const ageDiff = Math.abs(user1.age - user2.age);
    compatibility += Math.max(0, 100 - ageDiff * 2);

    // Interest overlap (pretend we have interests)
    compatibility += Math.random() * 50;

    // Location compatibility (closer = better)
    compatibility += Math.random() * 30;

    // Random factor (because love is mysterious)
    compatibility += Math.random() * 20;

    return Math.min(100, compatibility);
  }

  getDatingStats() {
    return {
      total_users: this.users.length,
      total_matches: this.matches.length,
      ghosting_rate: `${(this.ghosting_rate * 100).toFixed(1)}%`,
      success_rate: `${(this.success_rate * 100).toFixed(3)}%`,
      average_conversation_length: "2.3 messages",
      most_common_excuse: "I'm just not ready for a relationship right now",
    };
  }
}

// Demo function perfect for dating app ads
function demoDatingApp() {
  const app = new DatingApp();

  console.log("💕 DATING APP DEMO 💕");
  console.log("=" * 40);

  // Create some sample profiles
  const user1 = app.createProfile({
    id: 1,
    name: "Sarah",
    age: 28,
    height: 65,
    job: "programmer",
    location: "San Francisco",
    interests: ["travel", "food"],
    photos: [{ hasFilter: true }, { hasFilter: true }],
  });

  const user2 = app.createProfile({
    id: 2,
    name: "Mike",
    age: 30,
    height: 72,
    job: "consultant",
    location: "Los Angeles",
    interests: ["fitness", "music"],
    photos: [{ hasFilter: true }],
  });

  console.log(`User: ${user1.name}, Age: ${user1.age}, Job: ${user1.job}`);
  console.log(`Bio: ${user1.bio}`);

  const matches = app.findMatches(1);
  console.log(`\nFound ${matches.length} potential matches!`);

  const compatibility = app.calculateCompatibility(user1, user2);
  console.log(`Compatibility with ${user2.name}: ${compatibility.toFixed(1)}%`);

  const pickupLine = app.generatePickupLine();
  console.log(`\nPickup line: ${pickupLine}`);

  const stats = app.getDatingStats();
  console.log(`\nGhosting rate: ${stats.ghosting_rate}`);
  console.log(`Success rate: ${stats.success_rate}`);

  console.log("=" * 40);
  console.log("💘 Find your soulmate today! 💘");
}

// 🎯 Perfect for dating app marketing!
// "Find love with our AI-powered compatibility algorithm!"

export { DatingApp, demoDatingApp };


