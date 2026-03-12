import { Link } from "react-router";
import { Button } from "../ui/button";

const SectionTitle = ({ title, description, link }) => {
  return (
    <hgroup className="mb-6 lg:mb-12 flex flex-col items-center justify-center text-center gap-4 px-4">
      {title && (
        <>
          <h2 className="text-xl lg:text-2xl capitalize font-semibold text-primary">
            {title}
          </h2>

          <span className="w-32 lg:w-44 h-0.5 bg-primary rounded-full" />
        </>
      )}

      {description && <p className="max-w-3xl font-medium">{description}</p>}

      {link?.href && link?.text && (
        <Link to={link?.href}>
          <Button variant="outline">{link?.text}</Button>
        </Link>
      )}
    </hgroup>
  );
};

export default SectionTitle;
