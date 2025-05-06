import { ErrorBox } from '@/components/ErrorBox/ErrorBox';
import { Loader } from '@/components/Loader/Loader';
import { useDetails } from "@/hooks/useDetails";
import styles from '@/components/PokedexDetails/PokedexDetails.module.css';

export const PokedexDetails = () => {
  const { details, errors, isLoading, currentPokedex } = useDetails();

  if (!currentPokedex) {
    return (
      <>
        <h1 className={styles.pokemon_header}>Welcome to the Pokémon Hub</h1>
        <h2 className={styles.notification}>Please Select a Pokemon from the List</h2>
      </>
    );
  }
  console.log(details);

  if (isLoading) {
    return (
      <div className={styles.container_loader}>
        <Loader />
      </div>
    );
  }

  if (errors.length !== 0) {
    return (
      <ErrorBox errArr={errors} />
    );
  }

  if (!details) {
    return (
      <h2 className={styles.notification}>no details available for selected pokemon</h2>
    );
  }

  const formattedTypes = details.type
    .map(type => type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()).join(', ');

  return (
    <div className={styles.details_container}>
      <h1 className={styles.pokemon_header}>
        #{details.pokedex} - {details.name}
      </h1>
      <img src={details.image.imageUrl} alt={details.name} className={styles.pokemon_image} />
      <h2 className={styles.pokemon_detail}>
        Types: {formattedTypes}
      </h2>
    </div>
  );
};