import type { CourseData } from "@/components/Courses/CoursesClient";

export const CATEGORIES = [
  "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media",
  "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video",
  "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography",
  "Productivity", "Web Development", "Data Science", "Cooking",
  // shown after clicking "+ More"
  "Writing", "Language", "Health & Fitness", "Business Analytics",
];

// the same four profile pictures on every course
const STUDENTS = [
  { id: 1, name: "User 1", image: "/images/users/user1.png" },
  { id: 2, name: "User 2", image: "/images/users/user2.png" },
  { id: 3, name: "User 3", image: "/images/users/user3.png" },
  { id: 4, name: "User 4", image: "/images/users/user4.png" },
];

const course = (
  id: number,
  title: string,
  image: string,
  category: string,
  extra: Partial<CourseData> = {}
): CourseData => ({
  id,
  title,
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  image,
  lessons: 17,
  durationMins: 136,
  comments: 59,
  rating: 4.5,
  instructor: "purepearl studio",
  level: "Beginner",
  price: 25,
  featured: false,
  studentCount: 26,
  category: { name: category },
  students: STUDENTS,
  ...extra,
});

export const COURSES: CourseData[] = [
  course(1, "Learn Figma from Basic", "/images/c1.png", "UI/UX Design", { featured: true }),
  course(2, "Build Digital Asset", "/images/c2.png", "Graphic Design", { featured: true }),
  course(3, "the Power of Big Data", "/images/c3.png", "Data Science", { featured: true }),
  course(4, "Balancing Productivity and Life", "/images/c4.png", "Productivity", { featured: true }),
  course(5, "Mastering Money Management", "/images/c5.png", "Freelance & Entrepreneurship", { featured: true }),
  course(6, "From Idea to Startup Success", "/images/c6.png", "Freelance & Entrepreneurship", { featured: true }),
  // non-featured, so the other filters have content
  course(7, "Music Production Basics", "/images/c1.png", "Music"),
  course(8, "Portrait Photography", "/images/c2.png", "Photography"),
  course(9, "Modern React & Next.js", "/images/c3.png", "Web Development", { level: "Intermediate" }),
  course(10, "Social Media Growth", "/images/c4.png", "Social Media"),
];