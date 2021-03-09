const text = "Hola Mundo";

test('Debe contener un texto', () =>{
    expect(text).toMatch(/Hola/);
});