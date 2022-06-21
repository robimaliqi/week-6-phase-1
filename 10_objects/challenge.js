const cohort = {
  name : 'May2022',
  id: 1234,
  student_names: ['Dave', 'Allen', 'Steve', 'Tony']
};

function text() {
  console.log(`${this.id} ${this.name} ` + this.student_names.length + ` students in this cohort`);
}

cohort.text = text;

cohort.text();