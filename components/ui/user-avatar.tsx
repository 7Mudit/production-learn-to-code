// will come back to this
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

export const UserAvatar = () => {
  return (
    <div>
      <Avatar className="h-8 w-8">
        <AvatarImage src="./logo.png" />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
    </div>
  );
};
