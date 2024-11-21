import csv
from collections import namedtuple
from statistics import mean

Student = namedtuple('Student', ['name', 'age', 'grade'])

def read_csv(file_path):
    students = []
    try:
        with open(file_path, 'r', newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                students.append(Student(row['name'], int(row['age']), float(row['grade'])))
    except Exception as e:
        print(f"Error reading file: {e}")
    return students

def calculate_average_grade(students):
    grades = [student.grade for student in students]
    return mean(grades) if grades else 0

def find_highest_grade_student(students):
    return max(students, key=lambda student: student.grade, default=None)

def filter_students(students, grade_threshold=None, age_range=None):
    filtered_students = students
    if grade_threshold is not None:
        filtered_students = [student for student in filtered_students if student.grade > grade_threshold]
    if age_range is not None:
        filtered_students = [student for student in filtered_students if age_range[0] <= student.age <= age_range[1]]
    return filtered_students

def sort_students(students, sort_by='name', descending=False):
    return sorted(students, key=lambda student: getattr(student, sort_by), reverse=descending)

def write_csv(students, output_file_path):
    try:
        with open(output_file_path, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['name', 'age', 'grade']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for student in students:
                writer.writerow({'name': student.name, 'age': student.age, 'grade': student.grade})
    except Exception as e:
        print(f"Error writing file: {e}")

def main():
    input_file = input("Enter the path to the input CSV file: ")
    students = read_csv(input_file)
    
    if not students:
        print("No student data found.")
        return

    average_grade = calculate_average_grade(students)
    highest_grade_student = find_highest_grade_student(students)
    
    print(f"Average Grade: {average_grade:.2f}")
    if highest_grade_student:
        print(f"Highest Grade Student: {highest_grade_student.name} with grade {highest_grade_student.grade:.2f}")

    grade_threshold = float(input("Enter the grade threshold to filter students: "))
    min_age = int(input("Enter the minimum age to filter students: "))
    max_age = int(input("Enter the maximum age to filter students: "))

    filtered_students = filter_students(students, grade_threshold, (min_age, max_age))

    sort_by = input("Enter the column to sort by (name, age, grade): ").strip().lower()
    descending = input("Sort in descending order? (yes/no): ").strip().lower() == 'yes'

    sorted_students = sort_students(filtered_students, sort_by, descending)

    output_file = input("Enter the path to the output CSV file: ")
    write_csv(sorted_students, output_file)
    print(f"Filtered and sorted data has been written to {output_file}")

if __name__ == "__main__":
    main()
