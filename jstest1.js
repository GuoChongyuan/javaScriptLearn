function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

function createStudent(props) {
    return new Student(props || {})
}
let xiaoming = createStudent({
    name: '小明'
});
console.log(xiaoming.hello())
