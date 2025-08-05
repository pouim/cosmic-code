# 💪 FITNESS TRACKER - Because Counting Steps is Life

import random
from datetime import datetime, timedelta
from typing import Dict, List, Optional

class FitnessTracker:
    def __init__(self):
        self.steps = 0
        self.calories_burned = 0
        self.workouts_completed = 0
        self.motivation_level = 100  # Starts at 100%, drops to 0% by day 3
        
    def track_steps(self, actual_steps: int) -> Dict[str, any]:
        """Track steps with generous rounding and motivation"""
        
        # Add some "bonus" steps for good behavior
        bonus_steps = random.randint(100, 500)
        total_steps = actual_steps + bonus_steps
        
        # Calculate calories (using very optimistic math)
        calories = total_steps * 0.05  # 0.05 calories per step (very generous)
        
        self.steps += total_steps
        self.calories_burned += calories
        
        return {
            "steps": total_steps,
            "calories": calories,
            "motivation": "🔥 You're crushing it! 🔥",
            "achievement": self._generate_achievement(total_steps)
        }
    
    def _generate_achievement(self, steps: int) -> str:
        """Generate motivational achievements"""
        achievements = [
            "🏃‍♂️ Speed demon! You're faster than a cheetah!",
            "💪 Iron legs! Your calves are now made of steel!",
            "🌟 Step master! You've unlocked the walking badge!",
            "🚀 Rocket powered! You're literally flying!",
            "🎯 Target destroyed! Daily goal obliterated!"
        ]
        return random.choice(achievements)
    
    def generate_workout_plan(self) -> Dict[str, any]:
        """Generate a personalized workout plan (that you'll never follow)"""
        
        workouts = [
            {
                "name": "The 5-Minute Miracle",
                "duration": "5 minutes",
                "intensity": "Light",
                "promise": "Transform your life in just 5 minutes!",
                "reality": "You'll probably skip this"
            },
            {
                "name": "The 30-Day Challenge",
                "duration": "30 days",
                "intensity": "Extreme",
                "promise": "Complete transformation guaranteed!",
                "reality": "You'll quit on day 3"
            },
            {
                "name": "The 7-Minute Workout",
                "duration": "7 minutes",
                "intensity": "Medium",
                "promise": "Scientifically proven to work!",
                "reality": "You'll do it once, then forget"
            }
        ]
        
        return random.choice(workouts)
    
    def calculate_weight_loss(self, current_weight: float) -> Dict[str, any]:
        """Calculate projected weight loss (with very optimistic projections)"""
        
        # Very optimistic calorie deficit calculation
        daily_deficit = self.calories_burned * 0.1  # Assume 10% of calories burned = weight loss
        weekly_loss = daily_deficit * 7 / 3500  # 3500 calories = 1 pound
        
        projected_weight = current_weight - (weekly_loss * 52)  # Yearly projection
        
        return {
            "current_weight": current_weight,
            "projected_weight": max(projected_weight, 50),  # Don't go below 50 lbs
            "weekly_loss": weekly_loss,
            "motivation": "🎯 You'll be a fitness model by next month!",
            "reality_check": "Results may vary (they will vary a lot)"
        }
    
    def generate_meal_plan(self) -> List[str]:
        """Generate a healthy meal plan (that you'll ignore)"""
        
        meals = [
            "🥗 Superfood salad with kale, quinoa, and unicorn tears",
            "🍗 Grilled chicken breast with steamed broccoli (boring but healthy)",
            "🥑 Avocado toast with chia seeds (because millennials)",
            "🍎 Apple with almond butter (the snack that's always recommended)",
            "🥤 Green smoothie with spinach (tastes like grass but it's healthy)"
        ]
        
        return random.sample(meals, 3)  # Return 3 random meals
    
    def get_motivational_quote(self) -> str:
        """Get a motivational quote to keep you going"""
        
        quotes = [
            "💪 Pain is just weakness leaving the body!",
            "🔥 No pain, no gain! (Actually, some pain is bad)",
            "🚀 You're not tired, you're just getting stronger!",
            "⭐ Every step counts! (Even the ones to the fridge)",
            "🎯 Goals are dreams with deadlines! (That you'll probably miss)"
        ]
        
        return random.choice(quotes)
    
    def check_progress(self) -> Dict[str, any]:
        """Check your fitness progress with encouraging feedback"""
        
        return {
            "steps_today": self.steps,
            "calories_burned": self.calories_burned,
            "workouts_completed": self.workouts_completed,
            "motivation_level": max(0, self.motivation_level - 10),  # Decreases daily
            "message": "🌟 You're doing amazing! Keep it up!",
            "reality": "You're probably sitting on the couch reading this"
        }

def demo_fitness_tracker():
    """Demo function perfect for fitness app ads"""
    
    tracker = FitnessTracker()
    
    print("💪 FITNESS TRACKER DEMO 💪")
    print("=" * 40)
    
    # Simulate a day of activity
    result = tracker.track_steps(8000)  # Actually walked 8000 steps
    print(f"Steps: {result['steps']:,}")
    print(f"Calories: {result['calories']:.1f}")
    print(f"Achievement: {result['achievement']}")
    
    workout = tracker.generate_workout_plan()
    print(f"\nRecommended Workout: {workout['name']}")
    print(f"Duration: {workout['duration']}")
    print(f"Promise: {workout['promise']}")
    
    weight_loss = tracker.calculate_weight_loss(180)
    print(f"\nWeight Loss Projection: {weight_loss['weekly_loss']:.2f} lbs/week")
    print(f"Motivation: {weight_loss['motivation']}")
    
    print(f"\nQuote of the Day: {tracker.get_motivational_quote()}")
    print("=" * 40)
    print("🎯 Download now and transform your life! 🎯")

# Perfect for fitness app marketing!
if __name__ == "__main__":
    demo_fitness_tracker()
    
# 🎯 Marketing tagline: "Track your fitness journey with AI-powered motivation!" 