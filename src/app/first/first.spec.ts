import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First } from './first';

describe('First', () => {
  let component: First;
  let fixture: ComponentFixture<First>;

  function sumar(a: number, b: number): number {
    return a + b;
  }

  // Código que se ejecuta antes de cada test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [First]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Aquí comienzan los tests
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Correct message', () => {
    const msg = component.getMessage();
    expect(msg).toEqual('Hello, World!');
  });

  it('Calculadora - operacion suma', () => {
    let resultado = sumar(2, 3);
    expect(resultado).toBe(5);
    // expect(array).toContain(item);
    // expect(array).ToEqual([1,2,3]);
    // expect(array).toBeDefined();
    // expect(objeto.propiedad).toBeUndefined();
    // expect(objeto.propiedad).toBeDefined();
  });

  it('Resolving a promise', async () => {
    const miPromesa = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Promesa resuelta');
      }, 100);
    });
  });

  // Ejemplo de cómo resolver una promesa con done()
  
  /*it('Resolving a promise - second approach', (done) =>{
    functionAsyncrona().then( resultado => {
      expect(resultado).toBe('resultado esperado');
      done();
    }
  })*/
});
