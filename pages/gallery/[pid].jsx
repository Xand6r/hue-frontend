import NavBar from "components/navbar";
import Images from "./components/images";
import Footer from "components/footer";
import { getRequest } from "api";

export default function Gallery({ title, events }) {
  return (
    <div>
      <NavBar theme="dark" />
      <Images events={events} title={title} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { pid } = context.query;
  const { data: response } = await getRequest(`/gallery?eventid=${pid}`);
  const {
    event: { name: title },
    images,
  } = response;

  return { props: { events: images, title: title }};
}

// export const getStaticPaths = async () => {
//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };
