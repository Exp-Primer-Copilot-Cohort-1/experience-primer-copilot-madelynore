function skillsMember() {
    var skills = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 1000
    };
    var result = '';
    for (var key in skills) {
        result += key + ': ' + skills[key] + '<br>';
    }
    document.getElementById('result').innerHTML = result;
}