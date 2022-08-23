import Header from "../Header/Header";
import UserCard from "../UserCard/UserCard";
import styles from "./Body.module.css";


function Body() {

    const userData = [
        {
            name: 'Carla',
            age: 23,
            patientID: 'PT324342',
            photoSrc: 'https://beyourownbrandofsexy.com/wp-content/uploads/2018/11/1130Blog-Blog.jpg',
        },
        {
            name: 'Maria',
            age: 30,
            patientID: 'PT324355',
            photoSrc: 'https://images.unsplash.com/photo-1624462249307-b424b7ae2c72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbiUyMHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            name: 'Smiti',
            age: 33,
            patientID: 'PT324333',
            photoSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGluZGlhbiUyMHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            name: 'Sharina',
            age: 55,
            patientID: 'PT324343',
            photoSrc: 'https://images.unsplash.com/photo-1582402280754-6f09410d475b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGluZGlhbiUyMHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            name: 'Blair',
            age: 34,
            patientID: 'PT324348',
            photoSrc: 'https://media.istockphoto.com/photos/business-woman-stock-photo-picture-id1288144402?k=20&m=1288144402&s=612x612&w=0&h=7dfUCYYDeaGgC1I9oLUACU88uCysRys0xzPVnvRWszM=',
        },
        {
            name: 'Ceara',
            age: 35,
            patientID: 'PT324341',
            photoSrc: 'https://media.istockphoto.com/photos/senior-woman-relaxing-on-chair-at-home-picture-id1150536746?k=20&m=1150536746&s=612x612&w=0&h=_cRYYkqFudwZOefqXpSMJCwVgYXq-YIwzfLZEdzhJv4=',
        },
        {
            name: 'Mambia',
            age: 25,
            patientID: 'PT324377',
            photoSrc: 'https://images.unsplash.com/photo-1636980082981-5032716735ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxpbmRpYW4lMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            name: 'Sophia',
            age: 46,
            patientID: 'PT324340',
            photoSrc: 'https://images.unsplash.com/photo-1573496528388-2c5e0088d40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIxfHxpbmRpYW4lMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
    ]

  return (
      <>
          <Header/>
          <div className={styles['user-tiles']}>
              {
                  userData.map((element, index) => {
                      return <UserCard key={index} name={element.name} age={element.age} patientID={element.patientID} photoSrc={element.photoSrc} />
                  })
              }
          </div>
      </>
  );
}

export default Body;
