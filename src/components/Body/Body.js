import Header from "../Header/Header";
import UserCard from "../UserCard/UserCard";
import styles from "./Body.module.css";


function Body() {

  return (
      <>
          <Header/>
          <div className={styles['user-tiles']}>
              <UserCard name={'Carla'} age={23} patientID={'PT324342'} photoSrc={'https://beyourownbrandofsexy.com/wp-content/uploads/2018/11/1130Blog-Blog.jpg'} />
              <UserCard name={'Carla'} age={23} patientID={'PT324343'} photoSrc={'https://i.insider.com/5cb8b133b8342c1b45130629?width=700'} />
              <UserCard name={'Carla'} age={23} patientID={'PT324344'} photoSrc={'https://bestasianwomen.com/wp-content/uploads/2020/04/indian-3.jpg'} />
              <UserCard name={'Carla'} age={23} patientID={'PT324345'} photoSrc={'https://beyourownbrandofsexy.com/wp-content/uploads/2018/11/1130Blog-Blog.jpg'} />
              <UserCard name={'Carla'} age={23} patientID={'PT324346'} photoSrc={'https://beyourownbrandofsexy.com/wp-content/uploads/2018/11/1130Blog-Blog.jpg'} />
              <UserCard name={'Carla'} age={23} patientID={'PT324347'} photoSrc={'https://beyourownbrandofsexy.com/wp-content/uploads/2018/11/1130Blog-Blog.jpg'} />
              <UserCard name={'Carla'} age={23} patientID={'PT324348'} photoSrc={'https://beyourownbrandofsexy.com/wp-content/uploads/2018/11/1130Blog-Blog.jpg'} />
              <UserCard name={'Carla'} age={23} patientID={'PT324349'} photoSrc={'https://beyourownbrandofsexy.com/wp-content/uploads/2018/11/1130Blog-Blog.jpg'} />
          </div>
      </>
  );
}

export default Body;
