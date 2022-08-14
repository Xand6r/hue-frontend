import { getRequest } from "api";
import HomePage from "pages/home";

export default function Home(props) {
  return (
    <div>
      <HomePage {...props} />
    </div>
  );
}

export async function getServerSideProps() {
  const { data: response } = await getRequest("/events?limit=3");
  return { props: { events: response } };
}
