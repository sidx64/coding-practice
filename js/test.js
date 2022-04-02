/*
Task: render a directory of Navya’s expert panel and employees. We need to be able to view either all entries, 
only doctors, only employees, and only employees who are patient advocates. 

- All entries
- doctors
- all employees
- employees who are patient advocates -> PoC for patients

This will render as a list of boxes, with a menu on top to set which types we want to look at.

The boxes should each look exactly like, except:
Doctors show their org, linked to their org URL
Employees show their no. of years with the company.
Patient Advocate employees should be distinguished by a star within the box 

Here’s some sample data to use:

const people = [{
  name: 'Dr. Badwe',
  type: 'doctor',
  org: 'TMC',
  org_url: 'https://tmc.gov.in'
},{
  name: 'Michael',
  type: 'employee',
  designation: 'Software Engineer',
  years: 3
},{
  name: 'Dr. Nag',
  type: 'doctor',
  org: 'NCG',
  org_url: 'https://tmc.gov.in/ncg'
},{
  name: 'Rochelle',
  type: 'employee',
  designation: 'Patient Advocate',
  years: 5
},{
  name: 'Chirom',
  type: 'employee',
  designation: 'Patient Advocate',
  years: 8
},{
  name: 'Raju',
  type: 'employee',
  designation: 'Software Engineer',
  years: 5
}]

types - 
employee
doctor


*/

// Primary Component
    // Navigation Component 
        
    // Card Component - for all people
        // Name 
        // Optional stuff 
            // doctors - org + url
            // employees - number of years + * (Patient Advocate)
            
   
const people = [
  {
    name: 'Dr. Badwe',
    type: 'doctor',
    org: 'TMC',
    org_url: 'https://tmc.gov.in',
  },
  {
    name: 'Michael',
    type: 'employee',
    designation: 'Software Engineer',
    years: 3,
  },
  {
    name: 'Dr. Nag',
    type: 'doctor',
    org: 'NCG',
    org_url: 'https://tmc.gov.in/ncg',
  },
  {
    name: 'Rochelle',
    type: 'employee',
    designation: 'Patient Advocate',
    years: 5,
  },
  {
    name: 'Chirom',
    type: 'employee',
    designation: 'Patient Advocate',
    years: 8,
  },
  {
    name: 'Raju',
    type: 'employee',
    designation: 'Software Engineer',
    years: 5,
  },
];


const Navigation = (props) =>{


    return (
      
        <select onClick={props.selectedVal}>
          <option value='all' default>All</option>
          <option value='doctors'>Doctors</option>
          <option selected value='employees'>
            Employees
          </option>
          <option value='pa'>Patient Advocates</option>
        </select>

    );

}

const Directory = (props) =>{

    const [navValue, setNavValue] = useState('all');

    handleSelectedVal = (val) =>{
        setNavValue(val);
    }

    return(
        <div>
            <div>
                <Navigation selectedVal={handleSelectedVal}></Navigation>
            </div>
            <div>
                {
                    data.forEach(item=>{
                        <Card  item={[...item]}></Card>
                    })
                }
            </div>
        </div>
    )

}


