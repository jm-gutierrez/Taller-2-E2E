describe('Los estudiantes login', function() {
	it('Visits los estudiantes and fails at login', function() {
		cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Lineas nuevas  
		cy.contains('Ingresar').click()
		cy.screenshot('IngresoFallido1')
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
		cy.screenshot('IngresoFallido2')
		//Cerrar ventana de ingreso y de registro
		cy.get('.cajaLogIn').find('input[name="password"]').click().type('{esc}')
		

		// Cree una cuenta  Registro exitoso!
		/*cy.contains('Ingresar').click()
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Pruebas")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Automatizadas")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pruebasAutomatizadas2019@gmail.com")
		cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes').should('have.value', 'universidad-de-los-andes')
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Ingeniería de Sistemas y Computación').should('have.value', '12')
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("Vfr45tgb*")
		cy.get('.cajaSignUp').find('input[name="acepta"]').check()  
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.contains('Registro exitoso!')
		cy.contains('Ok').click()*/


		//pruebe el login correcto
		cy.contains('Ingresar').click()
		cy.screenshot('IngresoExitoso1')
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("johannagut0@gmail.com")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("Zaq12wsx*")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.screenshot('IngresoExitoso2')
		//Cerrar sesión
		cy.get('#cuenta').click()
		cy.contains('Salir').click()
		

		// la creación de una cuenta con un login que ya existe
		
		cy.contains('Ingresar').click()
		cy.screenshot('RegistroExistente1')
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Johanna")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Gutierrez")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("johannagut0@gmail.com")
		cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes').should('have.value', 'universidad-de-los-andes')
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Ingeniería de Sistemas y Computación').should('have.value', '12')
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("Zaq12wsx*")
		cy.get('.cajaSignUp').find('input[name="acepta"]').check()  
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.contains('Ocurrió un error activando tu cuenta')
		cy.screenshot('RegistroExistente2')
		//Cerrar ventana de ingreso y de registro
		cy.contains('Ok').click()
		cy.get('.cajaLogIn').find('input[name="password"]').click().type('{esc}')

		//Pruebe la funcionalidad de búsqueda de profesores y como dirigirse a la página de un profesor
		cy.get('.Select-arrow-zone').click()
		cy.get('.Select-control').find('input').should('not.be.visible').type("Jaime Chavarriaga")
		cy.get('.Select-menu-outer').first().should("contain", "Jaime Alberto Chavarriaga").click()

		//Pruebe los filtros por materia en la página de un profesor

		cy.get('.materias').contains('Fabricas').siblings('input').click()
	})
})