import projectOneHeader from "../assets/images/damac.webp";

import projectTwoHeader from "../assets/images/reportage.webp";
import locationIcon from "../assets/icons/location-icon.svg";
import percentage from "../assets/icons/down-payment.svg";
import coinIcon from "../assets/icons/coin.svg";
import DubaiVideo from "../assets/videos/dubai.mp4";
//Nearby Images
import dxb from "../assets/images/nearby/dxb.webp";
import downtown from "../assets/images/nearby/downtown.webp";
import marina from "../assets/images/nearby/marina.webp";
import moe from "../assets/images/nearby/moe.webp";
import dwc from "../assets/images/nearby/dwc.webp";
import jumeirah from "../assets/images/nearby/jumeirah.webp";
export const projectsData = [
	{
		id: 1,
		ProjectName: { en: "Park Greens", ar: "بارك غرين" },
		HeaderTitle: {
			en: "Modern Villas that Blended Seamlessly with Nature",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		HeaderImage: projectOneHeader,
		InfoTitle: {
			en: "Discover Your Water Wanderland",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		InfoSubTitle: {
			en: "With beautiful layouts, state-of-the-art finishes and lush living spaces that open out into your own private garden, celebrate the effortless balance between elegance and function.",
			ar: "استمتع بإطلالات بانورامية على بحيرة الغاف البكر بينما تنغمس في أسلوب حياة فاخر حقًا",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED2.89M", ar: "AED2.89M" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Damac Hills 2", ar: "داماك هيلز" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "20%", ar: "20%" },
				SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
			},
		],
		Nearby: [
			{
				Duration: "24",
				Place: { en: "Palm Jumeirah ", ar: "" },
				Image: jumeirah,
			},
			{
				Duration: "24",
				Place: { en: "Dubai Marina", ar: "" },
				Image: marina,
			},
			{
				Duration: "20",
				Place: { en: "DWC Airport", ar: "" },
				Image: dwc,
			},
			{
				Duration: "30",
				Place: { en: "DXB Airport", ar: "" },
				Image: dxb,
			},
			{
				Duration: "21",
				Place: { en: "Dubai Downtown", ar: "" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "" },
				Image: moe,
			},
		],
		Video: DubaiVideo,
	},
	{
		id: 2,
		ProjectName: { en: "Reportage Village", ar: "قرية ريبورتاج" },
		HeaderTitle: {
			en: "Ready for a new living Experience at Reportage Village",
			ar: "",
		},
		HeaderImage: projectTwoHeader,
		InfoTitle: {
			en: " Luxury Lifestyle with Close Proximity to Most of Dubai’s",
			ar: "عنوان المشروع الثاني",
		},
		InfoSubTitle: {
			en: "Reportage Village is in Dubailand. which offers distinctive and contemporary highend residential townhouses, delivering the whole luxury lifestyle with close proximity to most of Dubai's attractions.   and is surrounded by parks, schools",
			ar: "شرح مبسط عن المشروع الثاني ",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED2.1M", ar: "AED2.1M" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Dubailand", ar: "دبي لاند" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
			{
				Icon: percentage,
				Title: { en: "5%", ar: "5%" },
				SubTitle: { en: "Downpayment", ar: "دفعة مقدمة" },
			},
		],
		Nearby: [
			{
				Duration: "24",
				Place: { en: "Palm Jumeirah ", ar: "" },
				Image: jumeirah,
			},
			{
				Duration: "24",
				Place: { en: "Dubai Marina", ar: "" },
				Image: marina,
			},
			{
				Duration: "20",
				Place: { en: "DWC Airport", ar: "" },
				Image: dwc,
			},
			{
				Duration: "30",
				Place: { en: "DXB Airport", ar: "" },
				Image: dxb,
			},
			{
				Duration: "21",
				Place: { en: "Dubai Downtown", ar: "" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Mall of Emirates", ar: "" },
				Image: moe,
			},
		],
		Video: DubaiVideo,
	},
];
