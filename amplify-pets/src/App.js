import { useState } from "react";
import {
   PetDetails,
   AddPet,
   NavBar,
   Footer,
   PetProfileCollection,
} from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ user, signOut }) {
   const [showForm, setShowForm] = useState(false);
   const [showDetails, setShowDetails] = useState(false);
   const [pet, setPet] = useState(null);
   const [updatePet, setUpdatePet] = useState(null);
   const [petName, setPetName] = useState("");
   const [petAge, setPetAge] = useState("");
   const [petType, setPetType] = useState("");
   const [petAbout, setPetAbout] = useState("");
   const [petImage, setPetImage] = useState("");

   const navBarOverrides = {
      NavBar: {
         style: {
            marginBottom: "2rem",
         },
      },
      image: {
         src: user?.attributes?.profile,
         //  src: "https://jallieortiz.com/media/Benji.jpeg",
      },

      label: {
         children: `Hi ${user?.attributes?.name}!`,
         fontSize: "1rem`",
      },
      "Add Pet": {
         // change styling on hover
         style: {
            cursor: "pointer",
         },
         // add event listener
         onClick: () => {
            setShowForm(!showForm);
            setUpdatePet(null);
            setPetName("");
            setPetAge("");
            setPetType("");
            setPetAbout("");
            setPetImage("");
         },
      },

      // Signout button
      Button: {
         onClick: async () => {
            try {
               await signOut();
            } catch (error) {
               alert("error signing out: ", error);
            }
         },
      },
   };

   const formOverrides = {
      "Add a Pet": {
         children: updatePet ? "Update Pet" : "Add a Pet",
      },
      image: {
         src: updatePet
            ? updatePet.image
            : "https://jallieortiz.com/media/Benji.jpeg",
      },
      TextField29766922: {
         placeholder: petName,
      },
      TextField29766923: {
         placeholder: petAge,
      },
      TextField29766924: {
         placeholder: petType,
      },
      TextField36592761: {
         placeholder: petAbout,
      },
      TextField36592775: {
         placeholder: petImage,
      },

      // close form button
      Icon: {
         style: {
            cursor: "pointer",
         },
         onClick: () => {
            setShowForm(false);
            setUpdatePet(null);
            setPetName("");
            setPetAge("");
            setPetType("");
            setPetAbout("");
            setPetImage("");
         },
      },

      // save button
      Button29766926: {
         isDisabled: updatePet ? true : false,
      },

      // update button
      Button36592783: {
         isDisabled: updatePet ? false : true,
      },
   };

   const petDetailsOverrides = {
      CloseIcon: {
         style: {
            cursor: "pointer",
         },
         onClick: () => {
            setShowDetails(false);
         },
      },
   };

   return (
      <>
         <NavBar overrides={navBarOverrides} />

         <div
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               height: "100%",
               margin: "2rem",
            }}
         >
            <div>
               {showDetails && (
                  <PetDetails pet={pet} overrides={petDetailsOverrides} />
               )}
            </div>
         </div>
         <div
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               height: "100%",
               margin: "2rem",
            }}
         >
            <div style={{ background: "black" }}>
               {showForm && (
                  <AddPet
                     pet={updatePet}
                     style={{ margin: "1rem" }}
                     overrides={formOverrides}
                  />
               )}
            </div>
         </div>

         <div
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               height: "100%",
               margin: "2rem",
            }}
         >
            <div>
               <PetProfileCollection
                  itemsPerPage={6}
                  overrideItems={({ item, index }) => ({
                     overrides: {
                        // override style
                        Type: { color: "blue" },

                        // Profile button
                        Button29766907: {
                           onClick: () => {
                              setShowDetails(!showDetails);
                              setPet(item);
                           },
                        },

                        // Update button
                        Button36502689: {
                           onClick: () => {
                              setUpdatePet(item);
                              setPetName(item.name);
                              setPetAge(item.age);
                              setPetType(item.type);
                              setPetAbout(item.about);
                              setPetImage(item.image);
                              if (!showForm) setShowForm(true);
                           },
                        },
                     },
                  })}
               />
            </div>
         </div>

         <Footer />
      </>
   );
}

export default withAuthenticator(App);
