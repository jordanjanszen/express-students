const students = [
    {name: 'Matt', age: 21, major: 'Computer Science', pass: true},
    {name: 'Isabel', age: 20, major: 'IT', pass: true},
    {name: 'James', age: 22, major: 'Software Engineering', pass: true},
    {name: 'Laura', age: 21, major: 'Advanced COmputer Science', pass: true},
    {name: 'Rick', age: 23, major: 'Cyber Security', pass: true},
];

module.exports = {
    getAll: function() {
        return students;
    }
};