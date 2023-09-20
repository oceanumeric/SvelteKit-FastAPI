from flask import Flask, request, render_template

app = Flask(__name__)

# Initialize an empty list to store the to-do items
todo_list = []

@app.route('/hello', methods=['GET', 'POST'])
def index():
    # whenver the use clicks the submit button
    # the form data is sent to the server as a POST request
    if request.method == 'POST':
        task = request.form.get('task')
        if task:
            # Add the new task to the to-do list
            todo_list.append(task)
    
    return render_template('index.html', todo_list=todo_list)

if __name__ == '__main__':
    app.run(debug=True)
