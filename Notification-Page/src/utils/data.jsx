import Mark from "../assets/images/avatar-mark-webber.webp";
import Angela from "../assets/images/avatar-angela-gray.webp";
import Jacob from "../assets/images/avatar-jacob-thompson.webp";
import Rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "../assets/images/avatar-kimberly-smith.webp";
import Nathan from "../assets/images/avatar-nathan-peterson.webp";
import Anna from "../assets/images/avatar-anna-kim.webp";

export const users = [
  {
    avatar: Mark,
    name: "Mark Webber",
    text: "reacted to your recent post",
    boldText: <strong> My first tournament today!</strong>,
    date: "1m ago",
    className: "notification user-1 active",
  },
  {
    avatar: Angela,
    name: " Angela Gray",
    text: "followed you",
    date: "5m ago",
    className: "notification user-2 active",
  },
  {
    avatar: Jacob,
    name: "Jacob Thompson",
    text: "has joined your group Chess Club",
    date: "1 day ago",
    className: "notification user-3 active",
  },
  {
    avatar: Rizky,
    name: "Rizky Hasanuddin ",
    text: "sent you a private message",
    date: "5 days ago",
    className: "notification user-4 ",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    avatar: Kimberly,
    name: "Kimberly Smith",
    text: "commented on your picture!",
    date: "1 week ago",
    className: "notification user-5",
  },
  {
    avatar: Nathan,
    name: "Nathan Peterson",
    text: "reacted to your recent post 5 end-game strategies to increase your win rate",
    date: "2 weeks ago",
    className: "notification user-6",
  },
  {
    avatar: Anna,
    name: "Anna Kim",
    text: "left the group Chess Club",
    date: "2 weeks ago",
    className: "notification user-7",
  },
];
