import MyAvatar from "@/component/MyAvatar";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import PostList from "@/component/PostList";

const Home = () => {
  return (
    <div className="container mx-auto max-w-3xl space-y-8">
      <Header />

      <main className="flex flex-col justify-items-center space-y-20">
        {/* About Me */}
        <div className="flex flex-col items-center w-full">
          <h3 className="text-xl tracking-tighter mb-3">About Me</h3>

          <div className="flex flex-row space-x-8 justify-center">
            <div className="flex-col w-3/5 space-y-1">
              <h4 className="text-xl">Hi, i'm Heya</h4>
              <p className="text-lg">
                I am a highly skilled frontend engineer with seven years of
                experience in building user-friendly web applications. I
                specialize in HTML5, CSS3, JavaScript, and React, collaborating
                with cross-functional teams to create engaging interfaces.
              </p>
            </div>
            <div className="w-1/5 flex items-center">
              <MyAvatar />
            </div>
          </div>
        </div>

        {/* My Projects */}
        <div className="flex flex-col items-center w-full">
          <h3 className="text-xl tracking-tighter mb-3">My Projects</h3>

          <PostList />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
