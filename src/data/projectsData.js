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
import global from "../assets/images/nearby/global.webp";
import dwc from "../assets/images/nearby/dwc.webp";
import difc from "../assets/images/nearby/difc.webp";
import img from "../assets/images/nearby/img.webp";
import zayed from "../assets/images/nearby/zayed.webp";
export const projectsData = [
	{
		id: 1,
		ProjectName: { en: "Park Greens", ar: "بارك غرين" },
		HeaderTitle: {
			en: "Modern Villas that Blended Seamlessly with Nature",
			ar: "فلل فخمة تمتزج مع الطبيعة بسلاسة",
		},
		HeaderImage: projectOneHeader,
		InfoTitle: {
			en: "Discover Your Water Wonderland",
			ar: "تمتع بإطلالات مائية خلابة ",
		},
		InfoSubTitle: {
			en: "With beautiful layouts, state-of-the-art finishes and lush living spaces that open out into your own private garden, celebrate the effortless balance between elegance and function.",
			ar: "تنعم بالفخامة و الجودة مع تصميمات جميلة و تشطيبات حديثة و مساحات كبيرة مطلة على حديقتك الخاصة. ",
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
				Duration: "35",
				Place: { en: "DWC Airport", ar: "مطار آل مكتوم الدولي" },
				Image: dwc,
			},
			{
				Duration: "24",
				Place: {
					en: "IMG Worlds of Adventure",
					ar: "آي إم جي عالم من المغامرات",
				},
				Image: img,
			},
			{
				Duration: "20",
				Place: { en: "DIFC", ar: "مركز دبي المالي العالمي" },
				Image: difc,
			},
			{
				Duration: "25",
				Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
				Image: dxb,
			},
			{
				Duration: "30",
				Place: { en: "Dubai Downtown", ar: "وسط دبي" },
				Image: downtown,
			},
			{
				Duration: "20",
				Place: { en: "Global Village", ar: "القرية العالمية" },
				Image: global,
			},
		],
		Video: DubaiVideo,
	},
	{
		id: 2,
		ProjectName: { en: "Reportage Village", ar: "قرية ريبورتاج" },
		HeaderTitle: {
			en: "Ready for a new living Experience at Reportage Village",
			ar: "تجربة معيشة جديدة في قرية ريبورتاج",
		},
		HeaderImage: projectTwoHeader,
		InfoTitle: {
			en: " Luxury Lifestyle with Close Proximity to Most of Dubai’s",
			ar: "نمط حياة فاخر مع سهولة وصول لجميع مناطق دبي",
		},
		InfoSubTitle: {
			en: "Reportage Village is in Dubailand. which offers distinctive and contemporary highend residential townhouses, delivering the whole luxury lifestyle with close proximity to most of Dubai's attractions.   and is surrounded by parks, schools",
			ar: "تقع قريب ريبورتاج في دبي لاند و التي توفر مساكن مميزة و معاصرة ونمط حياة فاخر و محاط بالحدائق و المدارس مع سهولة وصول لأهم معالم دبي ",
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
				Duration: "11",
				Place: {
					en: "IMG Worlds of Adventure",
					ar: "آي إم جي عالم من المغامرات",
				},
				Image: img,
			},
			{
				Duration: "11",
				Place: { en: "Zayed University", ar: "جامعة زايد" },
				Image: marina,
			},
			{
				Duration: "20",
				Place: { en: "DIFC", ar: "مركز دبي المالي العالمي" },
				Image: difc,
			},
			{
				Duration: "30",
				Place: { en: "DXB Airport", ar: "مطار دبي الدولي" },
				Image: dxb,
			},
			{
				Duration: "27",
				Place: { en: "Dubai Downtown", ar: "وسط دبي" },
				Image: downtown,
			},
			{
				Duration: "23",
				Place: { en: "Mall of Emirates", ar: "مول الامارات" },
				Image: global,
			},
		],
		Video: DubaiVideo,
	},
];
