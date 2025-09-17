import addressModel from "../models/address.model.js";
import userModel from "../models/user.model.js";

export const addAddressController = async (req, res) => {
  try {
    const userId = req.userId; // middleware
    const { address_line, city, state, pincode, country, mobile } = req.body;

    const createAddress = new addressModel({
      address_line,
      city,
      state,
      country,
      pincode,
      mobile,
      userId: userId,
    });
    const saveAddress = await createAddress.save();

    const addUserAddressId = await userModel.findByIdAndUpdate(userId, {
      $push: {
        address_details: saveAddress._id,
      },
    });

    return res.json({
      message: "Address Created Successfully",
      error: false,
      success: true,
      data: saveAddress,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
