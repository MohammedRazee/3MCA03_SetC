# CA Lab Exam - Section 3MCA03 - Set C

**Academy Course Catalogue**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Edit only **database.js**. The comments in it tell you what to write.
- Do not change any other file.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database.js, stop the server with Ctrl + C and start it again.

## Database details

- **Database:** academy
- **Collection:** courses
- **Fields:** title (text), category (text), weeks (number), fee (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use academy
db.courses.insertMany([
  { title: "Python Basics", category: "Programming", weeks: 6, fee: 4500 },
  { title: "Logo Design", category: "Design", weeks: 4, fee: 3200 },
  { title: "Digital Marketing", category: "Business", weeks: 8, fee: 5800 },
  { title: "Web Development", category: "Programming", weeks: 12, fee: 9500 },
  { title: "UI Fundamentals", category: "Design", weeks: 5, fee: 4200 },
  { title: "Accounting 101", category: "Business", weeks: 3, fee: 2500 },
  { title: "Java Essentials", category: "Programming", weeks: 10, fee: 7800 },
  { title: "Photo Editing", category: "Design", weeks: 2, fee: 1800 },
  { title: "Public Speaking", category: "Business", weeks: 4, fee: 2900 },
  { title: "Data Analysis", category: "Programming", weeks: 9, fee: 8600 },
  { title: "Motion Graphics", category: "Design", weeks: 7, fee: 6400 },
  { title: "Startup Basics", category: "Business", weeks: 6, fee: 5200 }
])
```

## Show this output to the examiner

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Courses".  
   Expected: 12 courses.
3. **Search.** Choose Programming and click Search.  
   Expected: 4 courses: Python Basics, Web Development, Java Essentials, Data Analysis.
4. **Filter.** Type 6 in "Weeks less than" and click Filter.  
   Expected: 5 courses: Logo Design, UI Fundamentals, Accounting 101, Photo Editing, Public Speaking.
5. **3 Costliest Courses.** Click "3 Costliest Courses".  
   Expected: Web Development (9500), Data Analysis (8600), Java Essentials (7800), in this order.
6. **Add Course.** Fill the form with Title: Cloud Basics, Category: Programming, Weeks: 8, Fee: 6000. Click "Add Course".  
   Expected: The message "Course saved" appears and the list shows 13 courses, including Cloud Basics.
