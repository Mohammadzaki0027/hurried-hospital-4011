import { Filter } from "./filter";
import { Box } from "@chakra-ui/react";
import { Hotel } from "./HotelList";
import { useState } from "react";
import { SideImage } from "./SideImage";
import { useEffect } from "react";
export const Stay = () => {
  const property = [
    {
      id: "1",
      name: "Hotel Taj",
      country: "India",
      city: "Mumbai",
      price: 340,
      images: [
        "https://media.gettyimages.com/photos/the-taj-mahal-palace-hotel-at-dusk-picture-id520443060?k=20&m=520443060&s=612x612&w=0&h=PaGOxrU9P1yUCXeFGrPFkkcXl7aLdOAG2pzpqPDJl6g=",
        "https://media.gettyimages.com/photos/taj-mahal-hotel-bombay-picture-id521916998?k=20&m=521916998&s=612x612&w=0&h=COz7tCsUbUVDXefmtMON3sKMsDYq7o0XORWmfDKO7-M=",
        "https://media.gettyimages.com/photos/the-taj-mahal-palace-hotel-picture-id989771498?k=20&m=989771498&s=612x612&w=0&h=rKnbobhJte0htD8rGUGFLErOD3eD4BcRk8azGzqaFG8=",
        "https://media.gettyimages.com/photos/diners-enjoying-their-meals-at-machan-coffee-shop-taj-mahal-hotel-new-picture-id90565443?k=20&m=90565443&s=612x612&w=0&h=3RXZseNan-PdYBHUHNl-vrE1gQDwpHRELqovuq5FWcI=",
      ],
      date_start: "2022-02-28T19:21:49.720Z",
      date_end: "2022-07-08T23:13:40.977Z",
      stars: 3,
      rating: 4.2260803038065373,
      description:
        "Amet quas voluptas. Cum excepturi voluptatem alias eos eaque eveniet. Quae at ipsam excepturi reprehenderit. Quisquam consequatur et possimus aspernatur omnis velit facere pariatur.",
    },
    {
      id: "2",
      name: "Hotel Noor Fatai",
      country: "India",
      city: "Goa",
      price: 661,
      images: [
        "https://media.gettyimages.com/photos/luxury-construction-hotel-with-swimming-pool-at-sunset-picture-id903417402?k=20&m=903417402&s=612x612&w=0&h=a73RID4dpoONgEimlAbtupptZOkGb_ibZ0H5HoJj1iE=",
        "https://media.gettyimages.com/photos/indian-concierge-welcome-guest-at-hotel-entrance-agra-india-picture-id669319514?k=20&m=669319514&s=612x612&w=0&h=XQ_tVieZ1r4lKXdt3UqGzz35pUie14JOlqKtipjA0bM=",
        "https://media.gettyimages.com/photos/lobby-entrance-with-reception-desk-and-lounge-area-picture-id907633960?k=20&m=907633960&s=612x612&w=0&h=DzP2NB7nFfuFLuE4Ox3Lnp01y5MOneaaJYmGeYZdaIg=",
      ],
      date_start: "2022-02-28T19:21:49.720Z",
      date_end: "2022-10-17T04:39:29.370Z",
      stars: 3,
      rating: 2.5725330158543622,
      description:
        "Ullam autem aut rerum consequatur itaque quo ullam sit. Aut dolor consectetur harum voluptatibus tempora ullam eos suscipit. Aut blanditiis possimus vero. Repellat commodi reprehenderit libero esse sed.",
    },
    {
      id: "3",
      name: "Hotel Everest",
      country: "India",
      city: "Bangalore",
      price: 994,
      images: [
        "https://media.gettyimages.com/photos/modern-lounge-chairs-next-to-swimming-pool-picture-id109350324?k=20&m=109350324&s=612x612&w=0&h=I_ZazVVVskz63pcaQHpcuLZAEn-RxLI3sJGrVBKh_3c=",
        "https://media.gettyimages.com/photos/udaipur-city-palace-picture-id1200756095?k=20&m=1200756095&s=612x612&w=0&h=KcI-4tO4g2RmkJXfwGtuGWeK047zMdXFJKvRJcDaAUI=",
      ],
      date_start: "2022-02-28T19:21:49.720Z",
      date_end: "2022-11-04T09:33:41.660Z",
      stars: 5,
      rating: 3.0452429245509407,
      description:
        "Officiis perspiciatis voluptatem porro at voluptas. Animi et corporis porro incidunt quisquam libero enim corrupti. Nesciunt sed ea aliquam laboriosam natus exercitationem ullam possimus minus. Rerum quo qui facere. Pariatur excepturi odit id nam dolores dolorem laboriosam dicta aut. Neque aut sit sed repellendus sit et.",
    },
  ];

  const [data, setData] = useState(property);
  const [query, setQuery] = useState("");

  const search = (property) => {
    setData(property.filter((item) => item.city.includes(query)));
  };
  useEffect(() => {
    search(property);
  }, [query]);
  return (
    <Box
      border="1px solid green"
      display="flex"
      justifyContent="space-between"
      maxW="100%"
    >
      <Filter setQuery={setQuery} />
      <Hotel prop={data} />
      <SideImage />
    </Box>
  );
};
