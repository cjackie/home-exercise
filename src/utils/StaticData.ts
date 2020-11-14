import { Exercise, MuscleGroupKey } from "./Datatypes";
import { Level } from "./Personalization";

export const NOOP_EXERCISE = {
        name: "Unknown Exercise",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.BEGINNER
    };

export const EXERCISES: Array<Exercise> = [
    {
        name: "Wall Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.BEGINNER,
    },
    {
        name: "Leg Bent Floor Dips",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.BEGINNER,
    },
    {
        name: "Body-elevated Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.BEGINNER,
    }, 
    {
        name: "Modified Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.BEGINNER,
    }, 
    {
        name: "Box Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.BEGINNER,
    },
    {
        name: "Chest Press Squeeze",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.BEGINNER
    },
    {
        name: "Triceps Kickbacks",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.BEGINNER,
    },
    {
        name: "Shoulder IYTWO",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.BEGINNER,
    },
    {
        name: "Regular Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Narrow Grip",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Chair Dips",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Spiderman Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Frog Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "X Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Dolphin Push-up",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Pike Shoulder Press",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Bouncing Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Clapping Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Diamond Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Feet-elevated Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Mixed Grip Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Horse Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Stretch Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Side-to-Side Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Hindu Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Elevated Pike Shoulder Press",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Triceps Extension",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
        level: Level.ADVANCED,
    },
    {
        name: "Towel Rows",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.BEGINNER,
    },
    {
        name: "Bent Over Arm Raise",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.BEGINNER,
    },
    {
        name: "Towel Shrugs",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.BEGINNER,
    },
    {
        name: "Towel Lat Pull-downs",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.BEGINNER,
    },
    {
        name: "Towel W Raises",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.BEGINNER,
    },
    {
        name: "Rhomhoid Pulls",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.BEGINNER,
    },
    {
        name: "Door Frame Rows",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Towel Curls",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Lying Lat-pull with Towel",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Plank Rows",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Good Mornings",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Auqaman",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Lying Back Extension",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Superman",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.ADVANCED,
    },
    {
        name: "Reverse Snow Angels",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.ADVANCED,
    },
    {
        name: "Reacher Rows",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.ADVANCED,
    },
    {
        name: "Wall Walks",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.ADVANCED,
    },
    {
        name: "Scapular Push-ups",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.ADVANCED,
    },
    {
        name: "One-arm Doorway Rows",
        muscle: MuscleGroupKey.BACK_BICEPS,
        level: Level.ADVANCED,
    },
    {
        name: "Chair Squats",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Squats",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Wall Sit",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Towel Deadlifts",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Assisted Lunges",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Glute Bridges",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Donkey Kicks",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Fire Hydrants",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Calf Raises",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Reverse Calf Raises",
        muscle: MuscleGroupKey.LEG,
        level: Level.BEGINNER,
    },
    {
        name: "Lunges",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Static Lunges",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Single-leg Towel Deadlifts",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Chair Step Ups",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Hip Thrusts",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Reverse Lunges",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Hamstring Bridges",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Single-leg Calf Raises",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Single-leg Reverse Calf Raises",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Single-leg Glute Bridges",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Sumo Squats",
        muscle: MuscleGroupKey.LEG,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Assisted Single Leg Squat",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Single Leg Chair Squat",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Bulgarian Split Squat",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Single-leg Thrusts",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Single-leg Hamstrings Bridge",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Single-Leg Skater Squat",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Sissy Squat",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Russian Leg Curls",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Curtsy Lunge",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Falling Tower",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Single Leg Squat",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Curtsy Lunges",
        muscle: MuscleGroupKey.LEG,
        level: Level.ADVANCED,
    },
    {
        name: "Curl-ups",
        muscle: MuscleGroupKey.CORE,
        level: Level.BEGINNER,
    },
    {
        name: "Crunches with Arms across Chest",
        muscle: MuscleGroupKey.CORE,
        level: Level.BEGINNER,
    },
    {
        name: "Russain Twists",
        muscle: MuscleGroupKey.CORE,
        level: Level.BEGINNER,
    },
    {
        name: "Bird Dog",
        muscle: MuscleGroupKey.CORE,
        level: Level.BEGINNER,
    },
    {
        name: "Heel Touch",
        muscle: MuscleGroupKey.CORE,
        level: Level.BEGINNER,
    },
    {
        name: "Modified Abdominal Crunches",
        muscle: MuscleGroupKey.CORE,
        level: Level.BEGINNER,
    },
    {
        name: "Sit-ups",
        muscle: MuscleGroupKey.CORE,
        level: Level.BEGINNER,
    },
    {
        name: "Plank Holds",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Side Plank",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Leg Raises",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Crunches with Arms behind the Ears",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Rotational Sit Ups",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Crossover Crunches",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Handcuffed Running",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Windshield Wiper with Legs Bent",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Toes Touch",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "GrassHoppers",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Straight-arm Plan",
        muscle: MuscleGroupKey.CORE,
        level: Level.INTERMEDIATE,
    },
    {
        name: "V Sit-ups",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "V-up hold",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "Side Bridges",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "Helicopter",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "Flutter Kicks",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "Scissors",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "Cocoons",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "Side Plank with Leg Lift",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "Windshield Wiper",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "Reverse Crunches",
        muscle: MuscleGroupKey.CORE,
        level: Level.ADVANCED,
    },
    {
        name: "Inchworm",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Jumping Jacks",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Seal Jacks",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Cross-body Jumping Jack",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Skaters",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Sprinter’s Arm Swing",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Skier’s Arm Swing",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Slam",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Rotational Chop",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Diagonal Chop",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Power Skips",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Butt Kicks",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Bear Crawl",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Side Shuffles",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "High Knees",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Running in Place",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Front to back Hops",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Side-to-side Hops",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Punches",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Pogo Jumps",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Plank Jacks",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.BEGINNER,
    },
    {
        name: "Mountain Climbers",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Wide Mountain Climbers",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Semi-circle Mountain Climbers",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Alternating Single-leg Pogo Jumps",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Skaters",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Plank Shoulder Taps",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Halo Slam",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Low Rotational Chop",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Lateral 3-steps",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "High Knees",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Super Skaters Jumps",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "In-and-out Squat",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Modified Burpee",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Long Jump with Jog Back",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Sprinter Step",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "High-Knee Run",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Plank-to-knee tap",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Karate Squat",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.INTERMEDIATE,
    },
    {
        name: "Tuck Jump",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Side-to-side Mountain Climbers",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Alternating Fast Feet",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Double Fast Feet",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Speed Walk-out",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Breaker Dance",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Diagonal Mountain Climbers",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Drop Squats",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Sprinter Skip",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Corkscrew",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Rolling Squat Jump",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Single-leg hop",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "T-rotation",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Crab Walk",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Donkey Kicks",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Lunge jump",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Squat Reach Jumps",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
    {
        name: "Burpees",
        muscle: MuscleGroupKey.AEROBIC,
        level: Level.ADVANCED,
    },
]
