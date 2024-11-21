import string
from collections import Counter
import os

def analyze_text(file_path, top_n=10):
    if not os.path.exists(file_path):
        print("File not found. Please provide a valid file path.")
        return

    with open(file_path, 'r', encoding='utf-8') as file:
        text = file.read()
    
 
    translator = str.maketrans('', '', string.punctuation)
    cleaned_text = text.translate(translator).lower()
    

    words = cleaned_text.split()
    
    total_words = len(words)
    
    # Line Count
    total_lines = text.count('\n') + 1
    
    # Unique Word Count
    unique_words = set(words)
    unique_word_count = len(unique_words)
    
    # Most Frequent Words
    word_counts = Counter(words)
    most_frequent_words = word_counts.most_common(top_n)
    
    # Word Frequency Percentage
    word_frequency_percentage = {word: (count / total_words) * 100 for word, count in word_counts.items()}
    
   
    print(f"Total Words: {total_words}")
    print(f"Total Lines: {total_lines}")
    print(f"Unique Words: {unique_word_count}")
    print(f"Top {top_n} Most Frequent Words:")
    for word, count in most_frequent_words:
        print(f"{word}: {count} times")
    print("\nWord Frequency Percentage:")
    for word, percentage in word_frequency_percentage.items():
        print(f"{word}: {percentage:.2f}%")


file_path = input("Enter the path to the text file: ")
top_n = int(input("Enter the number of top frequent words to display: "))
analyze_text(file_path, top_n)
