const students = [
    {
        id: 1,
        name: "Alice Santos",
        year: 1,
        course: "BSIT",
        grades: [88, 90, 85],
        enrolled: true
    },
    {
        id: 2,
        name: "Brian Cruz",
        year: 2,
        course: "BSCS",
        grades: [92, 89, 94],
        enrolled: true
    },
    {
        id: 3,
        name: "Carla Reyes",
        year: 3,
        course: "BSIT",
        grades: [95, 93, 96],
        enrolled: true
    },
    {
        id: 4,
        name: "Daniel Garcia",
        year: 4,
        course: "BSIS",
        grades: [87, 85, 90],
        enrolled: false
    },
    {
        id: 5,
        name: "Ella Mendoza",
        year: 1,
        course: "BSCS",
        grades: [91, 88, 90],
        enrolled: true
    },
    {
        id: 6,
        name: "Frank Torres",
        year: 2,
        course: "BSIT",
        grades: [84, 86, 82],
        enrolled: true
    },
    {
        id: 7,
        name: "Grace Flores",
        year: 3,
        course: "BSIS",
        grades: [90, 92, 89],
        enrolled: true
    },
    {
        id: 8,
        name: "Henry Aquino",
        year: 4,
        course: "BSCS",
        grades: [96, 94, 95],
        enrolled: true
    },
    {
        id: 9,
        name: "Ivy Navarro",
        year: 1,
        course: "BSIT",
        grades: [89, 87, 91],
        enrolled: false
    },
    {
        id: 10,
        name: "Jack Ramos",
        year: 2,
        course: "BSIS",
        grades: [83, 85, 84],
        enrolled: true
    },
    {
        id: 11,
        name: "Karen Villanueva",
        year: 3,
        course: "BSCS",
        grades: [93, 95, 91],
        enrolled: true
    },
    {
        id: 12,
        name: "Leo Castillo",
        year: 4,
        course: "BSIT",
        grades: [88, 90, 92],
        enrolled: false
    },
    {
        id: 13,
        name: "Maria Bautista",
        year: 1,
        course: "BSIS",
        grades: [86, 89, 87],
        enrolled: true
    },
    {
        id: 14,
        name: "Nathan Lim",
        year: 2,
        course: "BSCS",
        grades: [90, 93, 92],
        enrolled: true
    },
    {
        id: 15,
        name: "Olivia Tan",
        year: 3,
        course: "BSIT",
        grades: [97, 96, 98],
        enrolled: true
    },
    {
        id: 16,
        name: "Peter Ong",
        year: 4,
        course: "BSIS",
        grades: [85, 88, 86],
        enrolled: false
    },
    {
        id: 17,
        name: "Queenie Sy",
        year: 1,
        course: "BSCS",
        grades: [94, 91, 93],
        enrolled: true
    },
    {
        id: 18,
        name: "Ryan Dela Cruz",
        year: 2,
        course: "BSIT",
        grades: [87, 89, 88],
        enrolled: true
    },
    {
        id: 19,
        name: "Sarah Fernandez",
        year: 3,
        course: "BSIS",
        grades: [92, 90, 94],
        enrolled: true
    },
    {
        id: 20,
        name: "Tom Rodriguez",
        year: 4,
        course: "BSCS",
        grades: [89, 91, 90],
        enrolled: true
    },
    {
        id: 21,
        name: "Ursula Martin",
        year: 1,
        course: "BSIT",
        grades: [91, 90, 92],
        enrolled: true
    },
    {
        id: 22,
        name: "Victor Perez",
        year: 2,
        course: "BSIS",
        grades: [84, 82, 86],
        enrolled: false
    },
    {
        id: 23,
        name: "Wendy Lopez",
        year: 3,
        course: "BSCS",
        grades: [95, 94, 96],
        enrolled: true
    },
    {
        id: 24,
        name: "Xavier Garcia",
        year: 4,
        course: "BSIT",
        grades: [90, 88, 91],
        enrolled: true
    },
    {
        id: 25,
        name: "Yvonne Santos",
        year: 1,
        course: "BSIS",
        grades: [87, 90, 89],
        enrolled: true
    },
    {
        id: 26,
        name: "Zachary Cruz",
        year: 2,
        course: "BSCS",
        grades: [92, 90, 94],
        enrolled: true
    },
    {
        id: 27,
        name: "Andrea Reyes",
        year: 3,
        course: "BSIT",
        grades: [93, 95, 94],
        enrolled: true
    },
    {
        id: 28,
        name: "Benjamin Flores",
        year: 4,
        course: "BSIS",
        grades: [81, 85, 83],
        enrolled: false
    },
    {
        id: 29,
        name: "Chloe Mendoza",
        year: 1,
        course: "BSCS",
        grades: [96, 95, 97],
        enrolled: true
    },
    {
        id: 30,
        name: "David Aquino",
        year: 2,
        course: "BSIT",
        grades: [86, 88, 87],
        enrolled: true
    }
];

function getAverageGrade(student) {
    if (!student || !Array.isArray(student.grades)) {
        return 0;
    }

    if (student.grades.length === 0) {
        return 0;
    }

    const total = student.grades.reduce(
        (sum, grade) => sum + grade,
        0
    );

    return total / student.grades.length;
}

function getTopStudents(students, n) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    if (typeof n !== "number" || n < 0) {
        throw new Error("n must be a non-negative number.");
    }

    return students
        .map(student => ({
            ...student,
            averageGrade: getAverageGrade(student)
        }))
        .sort((a, b) => b.averageGrade - a.averageGrade)
        .slice(0, n);
}

function groupByCourse(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    return students.reduce((groups, student) => {
        const course = student.course;

        if (!groups[course]) {
            groups[course] = [];
        }

        groups[course].push({ ...student });

        return groups;
    }, {});
}

function getEnrolledCount(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    const enrolled = students.filter(
        student => student.enrolled === true
    ).length;

    const notEnrolled = students.filter(
        student => student.enrolled === false
    ).length;

    return {
        enrolled: enrolled,
        notEnrolled: notEnrolled
    };
}

function findStudent(students, name) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    if (typeof name !== "string") {
        throw new Error("name must be a string.");
    }

    const searchName = name.toLowerCase();

    const student = students.find(
        student => student.name.toLowerCase() === searchName
    );

    return student ? { ...student } : null;
}

function getCourseAverages(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    const grouped = groupByCourse(students);

    return Object.keys(grouped)
        .map(course => {
            const courseStudents = grouped[course];

            const total = courseStudents.reduce(
                (sum, student) =>
                    sum + getAverageGrade(student),
                0
            );

            const average =
                courseStudents.length > 0
                    ? total / courseStudents.length
                    : 0;

            return {
                course: course,
                averageGrade: average
            };
        })
        .sort((a, b) => b.averageGrade - a.averageGrade);
}

function exportSummary(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    const averages = students.map(student =>
        getAverageGrade(student)
    );

    const overallAverage =
        averages.length > 0
            ? averages.reduce(
                (sum, average) => sum + average,
                0
            ) / averages.length
            : 0;

    const topStudents = getTopStudents(students, 1);

    return {
        totalStudents: students.length,
        overallAverageGrade: overallAverage,
        topPerformingStudent:
            topStudents.length > 0
                ? topStudents[0]
                : null,
        breakdownByCourse: getCourseAverages(students)
    };
}

function filterByYear(students, year) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    if (typeof year !== "number") {
        throw new Error("year must be a number.");
    }

    return students
        .filter(student => student.year === year)
        .map(student => ({ ...student }));
}

function sortByName(students) {
    if (!Array.isArray(students)) {
        throw new Error("students must be an array.");
    }

    return [...students].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}

function main() {
    console.log("======================================");
    console.log("   STUDENT RECORDS DATA PROCESSOR");
    console.log("======================================");

    console.log("\n--- TOTAL STUDENTS ---");
    console.log(students.length);

    const summary = exportSummary(students);

    console.log("\n--- OVERALL AVERAGE GRADE ---");
    console.log(summary.overallAverageGrade.toFixed(2));

    console.log("\n--- TOP 5 STUDENTS ---");

    const topStudents = getTopStudents(students, 5);

    topStudents.forEach((student, index) => {
        console.log(
            `${index + 1}. ${student.name} - ` +
            `${student.averageGrade.toFixed(2)}`
        );
    });

    console.log("\n--- AVERAGE GRADE BY COURSE ---");

    const courseAverages = getCourseAverages(students);

    courseAverages.forEach(course => {
        console.log(
            `${course.course}: ` +
            `${course.averageGrade.toFixed(2)}`
        );
    });

    console.log("\n--- ENROLLMENT COUNT ---");

    const enrollment = getEnrolledCount(students);

    console.log("Enrolled:", enrollment.enrolled);
    console.log("Not Enrolled:", enrollment.notEnrolled);

    console.log("\n--- SEARCH STUDENT ---");

    const result = findStudent(
        students,
        "alice santos"
    );

    if (result) {
        console.log("Student found:", result.name);
    } else {
        console.log("Student not found.");
    }

    console.log("\n--- YEAR 2 STUDENTS ---");

    const year2 = filterByYear(students, 2);

    year2.forEach(student => {
        console.log(student.name);
    });

    console.log("\n--- STUDENTS SORTED BY NAME ---");

    const alphabetical = sortByName(students);

    alphabetical.slice(0, 5).forEach(student => {
        console.log(student.name);
    });

    console.log("\n--- COMPLETE SUMMARY ---");
    console.log(JSON.stringify(summary, null, 2));

    console.log("\n======================================");
    console.log("           END OF REPORT");
    console.log("======================================");
}

main();

