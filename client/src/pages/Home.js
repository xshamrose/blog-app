import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4444/api/posts${cat}`);
        if (Array.isArray(res.data)) {
          setPosts(res.data);
        } else {
          console.error("Data is not an array:", res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "post1sdfkjhdsiufjhsldjhfiufhiuweafwefwefw",
  //     desc: "wfhowifwenffnjkloijuygtrdeszdfxghjkoijuytfrdfgcvhjkuhygefhifwolfihewoghfwhfgwhowholwhgwoglhohgo3gnkw",
  //     img: "https://images.pexels.com/photos/18906748/pexels-photo-18906748/free-photo-of-lightning-on-earth.jpeg",
  //   },
  //   {
  //     id: 2,
  //     title: "post2wefwsffinc9sy8wcncf8yw9lu d jlkhbcguyd",
  //     desc: "wfhowifwenffwnkefoiwhfwoefwoehfwefhifwolvgcfdresdfghyuijknbhfdxertyuhkjbvcftfyguhjkwhgwoglhohgo3gnkw",
  //     img: "https://images.pexels.com/photos/11531570/pexels-photo-11531570.jpeg",
  //   },
  //   {
  //     id: 3,
  //     title: "post3sdbfvtwyeryiwugsdkvufwac kwgfgkewugfwef",
  //     desc: "wfhowifwenffwnkefoiwhfwoefwiop[oikjhbgvfrdeswsrdftgyuhjkbvgftyuijkbhvgftyuikjftyuiokjhbvgglhohgo3gnkw",
  //     img: "https://images.pexels.com/photos/18985111/pexels-photo-18985111/free-photo-of-silhouetted-palm-trees-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 4,
  //     title: "post4 idflboyuvoibeiufbvfuiesubeverrebuierjkfdhgb",
  //     desc: "wfhodfrtyhujhbgvfcdxsdfrgtyhujikjnhbvcvbnhjmkiuyhgtfredwsxcvfgbhnjmk,oghfwhfgwhowholwhgwoglhohgo3gnkw",
  //     img: "https://images.pexels.com/photos/239577/pexels-photo-239577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 5,
  //     title: "post5iuobyevuiesbkjhfgbuivijhreghbuidfgueieropshu",
  //     desc: "wfhowifwenffwnkefoiwhfwoefwoehfwefhifwolfihewoghfwhfgwhowhofyguiojhbvgcfdersdfgtyuhijgcfdrtyguhj3gnkw",
  //     img: "https://images.pexels.com/photos/2449543/pexels-photo-2449543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
