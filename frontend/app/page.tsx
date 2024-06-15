'use client'
import ParkItemsList from "./components/elements/ParkItemsList";

import {useSelector} from "react-redux";
import {selectIsLogged} from "@/app/lib/slices/isLogged";
import Authorize from "@/app/components/layouts/Authorize";

export default function Home() {
    const logged = useSelector(selectIsLogged);
  return (
  <section className='h-full min-h-[96vh] w-full'>
      { logged ?
      <ParkItemsList/>
          : <Authorize/>
      }
  </section>
  );
}
