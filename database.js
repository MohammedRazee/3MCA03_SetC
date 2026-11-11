// ==================================================================
// EDIT THIS FILE ONLY. Do not change any other file in this project.
// Complete every function below. Each function must return its result.
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: academy



// Step 3: Create the schema and the model here.
//         Model name: Course   (Mongoose saves it in the "courses" collection)
//         Fields: title (String), category (String), weeks (Number), fee (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the courses in the collection.
export async function getAllCourses() {

}


// category comes from the "Search by category" box on the page, for example "Programming".
// Return the courses whose category matches it.
export async function findCoursesByCategory(category) {

}


// maxWeeks is a number typed on the page, for example 6.
// Return the courses whose weeks is less than maxWeeks.
export async function findShortCourses(maxWeeks) {

}


// Return the 3 courses with the highest fee, highest first.
export async function getThreeCostliestCourses() {

}


// course comes from the "Add Course" form, for example:
//   { title: "Excel Skills", category: "Business", weeks: 8, fee: 6000 }
// Save it in the database and return the saved course.
export async function addCourse(course) {

}
