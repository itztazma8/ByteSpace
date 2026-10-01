import CoursesClient from "./CoursesClient";
import { CATEGORIES, COURSES } from "@/data/courses";

export default function Courses() {
  return <CoursesClient categories={CATEGORIES} courses={COURSES} />;
}