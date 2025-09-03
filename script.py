import os

SOURCE_DIR = "src"
TEXT_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx", ".json"]

def extract_lines_from_source():
    all_lines = []

    for root, _, files in os.walk(SOURCE_DIR):
        for file in files:
            ext = os.path.splitext(file)[1]
            if ext in TEXT_EXTENSIONS:
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8", errors="ignore") as f:
                        lines = f.readlines()
                        rel_path = os.path.relpath(path, SOURCE_DIR)
                        for line in lines:
                            line = line.strip()
                            if line:
                                all_lines.append((rel_path.replace("\\", "/"), line))
                except Exception:
                    continue

    return all_lines

def save_lines_to_markdown(lines, output_path):
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("# Extracted Lines of Code from `src/`\n\n")
        current_file = ""
        for filepath, line in lines:
            if filepath != current_file:
                current_file = filepath
                f.write(f"### `{filepath}`\n")
            f.write(f"- {line}\n")

output_path = "script.md"
extracted_lines = extract_lines_from_source()
save_lines_to_markdown(extracted_lines, output_path)

output_path
