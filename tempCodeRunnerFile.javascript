function Person(personAttributes)  {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
  }
  
  const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
  });

  console.log(fred.name);
  