from flask import Flask, render_template

app = Flask(__name__, template_folder='final fee project')

@app.route('/')
def home():
    testimonials = [
        {'photo': 'tanish.jpg', 'name': 'Tanish Singh', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {'photo': 'anish.jpg', 'name': 'Anish Thakur', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {'photo': 'suraj.jpg', 'name': 'Suraj Setia', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
    return render_template('main3h.html', testimonials=testimonials)

if __name__ == '__main__':
    app.run(debug=True)
