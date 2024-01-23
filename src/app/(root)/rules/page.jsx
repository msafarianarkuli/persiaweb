import { meta } from "@/utils/meta";
import Rules from "@/views/main/rules";

export const metadata = {
  title: meta.rules.title,
  description: meta.rules.description,
};

function RulesPage() {
  return <Rules />;
}

export default RulesPage;
