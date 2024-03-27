import { IoWallet, IoCall, IoPerson, IoBusiness, IoCreate, IoTrash, IoLocation, IoMail } from "react-icons/io5";
import { LiaSmsSolid, LiaEdit, LiaTrashSolid } from "react-icons/lia";
import { IconButton, Typography } from "@material-tailwind/react";

export default function AddQuote() {

  const TABLE_HEAD = ["Order#", "Date", "Amount", "Credit Used"];
  const TABLE_ROWS = []

  return (
    <>
      <div className="w-full h-11 rounded-t-lg bg-theme-gradient flex items-center justify-between px-2">

        <div className="min-w-[6rem] px-1 h-8 rounded-3xl flex items-center justify-between bg-white">
          <div className="w-6 h-6 rounded-xl bg-theme-gradient flex-center">
            <IoWallet size={15} color="white" />
          </div>
          <span className="mx-1 text-lg font-bold text-indigo-500">0</span>
        </div>

        <div className="w-auto px-1 h-8 flex items-center justify-between">
          <IconButton size="sm" className="flex-col-center rounded-full hover:border hover:border-white/80" variant="text" color="white">
            <IoMail size={18} />
          </IconButton>
          <IconButton size="sm" className="flex-col-center rounded-full hover:border hover:border-white/80" variant="text" color="white">
            <IoCreate size={18} />
          </IconButton>
          <IconButton size="sm" className="flex-col-center rounded-full hover:border hover:border-white/80" variant="text" color="white">
            <IoTrash size={18} />
          </IconButton>
          {/* <button className="btn btn-sm btn-circle btn-success">
            <IoLogoWhatsapp className="text-white" />
          </button>
          <button className="btn btn-sm btn-circle btn-primary">
            <IoCreate className="text-white" />
          </button>
          <button className="btn btn-sm btn-circle btn-error">
            <IoTrash className="text-white" />
          </button> */}
        </div>
      </div>

      <div className="w-full h-[27rem] bg-gray-200 rounded-b-lg flex flex-col items-center justify-start p-2">
        {/* Customer Details Tabs */}
        <div className="w-full h-auto flex items-center justify-between space-x-3 px-2 rounded-lg bg-green-600 shadow-lg text-white">

          <div className="w-2/12 h-24 rounded-lg bg-white"></div>
          <div className="w-10/12 py-2 flex flex-col items-start justify-start">
            <div className="w-full flex items-center justify-start space-x-2">
              <label className="rounded-3xl bg-white/75 avatar placeholder">
                <div className="w-5 rounded-full">
                  <IoBusiness size={12} className="text-green-600" />
                </div>
              </label>
              <span className="text-md text-white/90">ABC Industries Pvt Ltd</span>
            </div>
            <div className="w-full flex items-center justify-start space-x-2">
              <label className="rounded-3xl bg-white/75 avatar placeholder">
                <div className="w-5 rounded-full">
                  <IoPerson size={12} className="text-green-600" />
                </div>
              </label>
              <span className="text-md text-white/90">John Doe</span>
            </div>
            <div className="w-full flex items-center justify-start space-x-2">
              <label className="rounded-3xl bg-white/75 avatar placeholder">
                <div className="w-5 rounded-full">
                  <IoCall size={12} className="text-green-600" />
                </div>
              </label>
              <span className="text-md text-white/90">+91 1234567890</span>
            </div>
            <div className="w-full flex items-center justify-start space-x-2">
              <label className="rounded-3xl bg-white/75 avatar placeholder">
                <div className="w-5 rounded-full">
                  <IoLocation size={12} className="text-green-600" />
                </div>
              </label>
              <span className="text-md text-white/90">Ch. Shambhajinagar, Maharashtra - 431001</span>
            </div>
          </div>



          {/* <div className="w-4/12 h-24 rounded-lg flex flex-col items-center justify-evenly bg-green-600 shadow-lg text-white">
            <label className="rounded-3xl bg-white avatar placeholder">
              <div className="w-10 rounded-full">
                <IoBusiness size={24} className="text-green-600" />
              </div>
            </label>
            <span className="text-sm">ABC Industries Pvt Ltd</span>
          </div> */}
          {/* <div className="w-4/12 h-24 rounded-lg flex flex-col items-center justify-evenly bg-amber-600 shadow-lg text-white">
            <label className="rounded-3xl bg-white avatar placeholder">
              <div className="w-10 rounded-full">
                <IoPerson size={24} className="text-amber-600" />
              </div>
            </label>
            <span className="text-sm">John Doe</span>
          </div>
          <div className="w-4/12 h-24 rounded-lg flex flex-col items-center justify-evenly bg-red-600 shadow-lg text-white">
            <label className="rounded-3xl bg-white avatar placeholder">
              <div className="w-10 rounded-full">
                <IoCall size={24} className="text-red-600" />
              </div>
            </label>
            <span className="text-sm">+91 1234567890</span>
          </div> */}
        </div>

        <div className="w-full max-h-[20rem] mt-2 rounded-lg no-scrollbar overflow-y-scroll bg-base-100 shadow-lg">
          <table className="w-full min-w-max table-auto text-left relative">
            <thead className="border-b border-blue-500 bg-theme-gradient sticky top-0">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="p-4">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ id, date, amt, credit }, index) => (
                <tr key={index} className="even:bg-blue-50/50">
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {amt}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      +/-{credit}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    </>
  )

}