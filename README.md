# Test this project

This project is the execution of the "Lodgify Frontend Technical Test". 

To see this project deployed in production, click here.

This project is a react app, created with create-react-app. 


## Components hierarchy

`App`   
----->`RentalsListPage`   
-------------------->`RentalCard`  
------------------------------>`CardStatus`  
------------------------------>`CardFigure`  
------------------------------>`CardCardDescription`  
------------------------------>`CardAction`  

`RentalsListPage` gets the data from the provided endpoint and uses the response to set its own state (`rentalsList`). 

For each item in the `rentalsList` array, it creates a RentalCard (rentalsList.map). The rental data is passed to each `RentalCard` as `props`. 

From the `RentalCard`, the relevant `props` data is then passed to each individual component. 


# Files composition & standards

### Composition
 - "Full pages" components are located in in src > pages. for this project, the only page component is `RentalsListPage`. 
 - All other components are located in src > components. 
 - `assets` are located in the root of the src folder. 
 - Components folders include a *component*.**js** file and a *component*.**css** file. Components styles are handled by their specific css file - with the exception of global/generic styles which are handled in the index.css file (e.g.: p {margin: 0}). 
 - Source Sans Pro Font is added directly in the /public/index.html file. 

### Standards
 - "Components" folders and files are described with PascalCase. 
 - variables, props, and other files(!components), are described in camelCase.
 - Only functional components are used.
 - Components state is managed with hooks (`useState` and `useEffect`).
 - `axios` is used to handle http requests. `.then` is used to handle promisses. 



# Caveats & open topics

- Inner card gradient shadow is not being applied
- card border is not being applied 
- Flexbox was used to position the cards. Could grid have been better?  


#### If you've got this far, thank you for reviewing this project. I'm eager to hear what you think. When sharing your feedback, Please separate it in: 
1. Overall code structure (components structure and hierarchy, state management, files organization, etc.);
2. CSS styling. 

💙



