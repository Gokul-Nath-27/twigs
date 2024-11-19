import React from "react";
import { twigsComponentLoader, twigsIconLoader } from "./twigs-loader";
import {
  dialogs,
  DialogsManager,
  Editor,
  MentionNode,
  MentionsPlugin,
  BoldTool,
  ItalicTool,
  EditorToolbar,
  DialogLinkEditor,
  RichEditor,
  HashTagNode,
  HashTagPlugin,
  EditorLookupDropdownBase,
  ConvertSelectionToLinkOnPastePlugin,
  EmojiNode,
  EmojiPlugin
} from "@sparrowengg/twigs-react";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isTextNode } from "lexical";

const ReactLiveScope = {
  React,
  ...React,
  Button: twigsComponentLoader("Button"),
  Flex: twigsComponentLoader("Flex"),
  Grid: twigsComponentLoader("Grid"),
  Input: twigsComponentLoader("Input"),
  Textarea: twigsComponentLoader("Textarea"),
  Checkbox: twigsComponentLoader("Checkbox"),
  Radio: twigsComponentLoader("Radio"),
  Select: twigsComponentLoader("Select"),
  FormInput: twigsComponentLoader("FormInput"),
  FormLabel: twigsComponentLoader("FormLabel"),
  RadioGroup: twigsComponentLoader("RadioGroup"),
  Switch: twigsComponentLoader("Switch"),
  Slider: twigsComponentLoader("Slider"),
  SliderThumb: twigsComponentLoader("SliderThumb"),
  SliderRange: twigsComponentLoader("SliderRange"),
  SliderTrack: twigsComponentLoader("SliderTrack"),
  SplitButton: twigsComponentLoader("SplitButton"),
  FormHelperText: twigsComponentLoader("FormHelperText"),
  Text: twigsComponentLoader("Text"),
  Heading: twigsComponentLoader("Heading"),
  Link: twigsComponentLoader("Link"),
  Pagination: twigsComponentLoader("Pagination"),
  Stepper: twigsComponentLoader("Stepper"),
  StepperItem: twigsComponentLoader("StepperItem"),
  Stack: twigsComponentLoader("Stack"),
  Separator: twigsComponentLoader("Separator"),
  VStack: twigsComponentLoader("VStack"),
  HStack  : twigsComponentLoader("HStack"),
  Tabs: twigsComponentLoader("Tabs"),
  TabsList: twigsComponentLoader("TabsList"),
  TabsTrigger: twigsComponentLoader("TabsTrigger"),
  TabsContent: twigsComponentLoader("TabsContent"),
  ArrowLeftIcon: twigsIconLoader("ArrowLeftIcon"),
  SearchIcon: twigsIconLoader("SearchIcon"),
  UserIcon: twigsIconLoader("UserIcon"),
  DownloadIcon: twigsIconLoader("DownloadIcon"),
  EmailIcon: twigsIconLoader("EmailIcon"),
  ChevronDownIcon: twigsIconLoader("ChevronDownIcon"),
  TickCircleFillIcon: twigsIconLoader("TickCircleFillIcon"),
  PencilIcon: twigsIconLoader("PencilIcon"),
  ChevronDownIcon: twigsIconLoader("ChevronDownIcon"),
  Chip: twigsComponentLoader("Chip"),
  Avatar: twigsComponentLoader("Avatar"),
  AvatarBadge: twigsComponentLoader("AvatarBadge"),
  AvatarGroup: twigsComponentLoader("AvatarGroup"),
  Calendar: twigsComponentLoader("Calendar"),
  DatePicker: twigsComponentLoader("DatePicker"),
  CalendarRange: twigsComponentLoader("CalendarRange"),
  Alert: twigsComponentLoader("Alert"),
  AlertDescription: twigsComponentLoader("AlertDescription"),
  Toastr: twigsComponentLoader("Toastr"),
  toast: twigsComponentLoader("toast"),
  ToastAction: twigsComponentLoader("ToastAction"),
  Tooltip: twigsComponentLoader("Tooltip"),
  TooltipProvider: twigsComponentLoader("TooltipProvider"),
  Popover: twigsComponentLoader("Popover"),
  PopoverTrigger: twigsComponentLoader("PopoverTrigger"),
  PopoverContent: twigsComponentLoader("PopoverContent"),
  PopoverClose: twigsComponentLoader("PopoverClose"),
  PopoverArrow: twigsComponentLoader("PopoverArrow"),
  HoverCard: twigsComponentLoader("HoverCard"),
  HoverCardTrigger: twigsComponentLoader("HoverCardTrigger"),
  HoverCardContent: twigsComponentLoader("HoverCardContent"),
  DropdownMenu: twigsComponentLoader("DropdownMenu"),
  DropdownMenuTrigger: twigsComponentLoader("DropdownMenuTrigger"),
  DropdownMenuContent: twigsComponentLoader("DropdownMenuContent"),
  DropdownMenuItem: twigsComponentLoader("DropdownMenuItem"),
  DropdownMenuSub: twigsComponentLoader("DropdownMenuSub"),
  DropdownMenuSubTrigger: twigsComponentLoader("DropdownMenuSubTrigger"),
  DropdownMenuCheckboxItem: twigsComponentLoader("DropdownMenuCheckboxItem"),
  DropdownMenuLabel: twigsComponentLoader("DropdownMenuLabel"),
  DropdownMenuRadioGroup: twigsComponentLoader("DropdownMenuRadioGroup"),
  DropdownMenuRadioItem: twigsComponentLoader("DropdownMenuRadioItem"),
  DropdownMenuSeparator: twigsComponentLoader("DropdownMenuSeparator"),
  DropdownMenuSubContent: twigsComponentLoader("DropdownMenuSubContent"),
  Drawer: twigsComponentLoader("Drawer"),
  DrawerHeader: twigsComponentLoader("DrawerHeader"),
  DrawerFooter: twigsComponentLoader("DrawerFooter"),
  DrawerBody: twigsComponentLoader("DrawerBody"),
  Box: twigsComponentLoader("Box"),
  dialogs,
  DialogsManager,
  ConvertSelectionToLinkOnPastePlugin,
  Dialog: twigsComponentLoader("Dialog"),
  DialogTitle: twigsComponentLoader("DialogTitle"),
  DialogDescription: twigsComponentLoader("DialogDescription"),
  DialogClose: twigsComponentLoader("DialogClose"),
  DialogTrigger: twigsComponentLoader("DialogTrigger"),
  DialogContent: twigsComponentLoader("DialogContent"),
  IconButton: twigsComponentLoader("IconButton"),
  AlertDialog: twigsComponentLoader("AlertDialog"),
  AlertDialogAction: twigsComponentLoader("AlertDialogAction"),
  AlertDialogActions: twigsComponentLoader("AlertDialogActions"),
  AlertDialogCancel: twigsComponentLoader("AlertDialogCancel"),
  AlertDialogContent: twigsComponentLoader("AlertDialogContent"),
  AlertDialogDescription: twigsComponentLoader("AlertDialogDescription"),
  AlertDialogTitle: twigsComponentLoader("AlertDialogTitle"),
  AlertDialogTrigger: twigsComponentLoader("AlertDialogTrigger"),
  Accordion: twigsComponentLoader("Accordion"),
  AccordionContent: twigsComponentLoader("AccordionContent"),
  AccordionItem: twigsComponentLoader("AccordionItem"),
  AccordionTrigger: twigsComponentLoader("AccordionTrigger"),
  CircleLoader: twigsComponentLoader("CircleLoader"),
  LineLoader: twigsComponentLoader("LineLoader"),
  Table: twigsComponentLoader("Table"),
  Tbody: twigsComponentLoader("Tbody"),
  Thead: twigsComponentLoader("Thead"),
  Th: twigsComponentLoader("Th"),
  Td: twigsComponentLoader("Td"),
  Tr: twigsComponentLoader("Tr"),
  Editor,
  MentionsPlugin,
  EmojiPlugin,
  MentionNode,
  EmojiNode,
  HashTagPlugin,
  HashTagNode,
  BoldTool,
  ItalicTool,
  EditorToolbar,
  DialogLinkEditor,
  RichEditor,
  EditorLookupDropdownBase,
  useLexicalComposerContext,
  $getSelection,
  $isTextNode
};

export default ReactLiveScope;
