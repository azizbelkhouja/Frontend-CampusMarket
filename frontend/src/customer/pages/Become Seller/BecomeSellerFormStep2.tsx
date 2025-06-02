import { Box, TextField } from '@mui/material';
import React from 'react';

const BecomeSellerFormStep2 = ({ formik }: any) => {
  return (
    <Box>
      <div className="flex flex-col gap-5">
        <TextField
          fullWidth
          name="pickupAddress.name"
          label="Full Name"
          variant="outlined"
          value={formik.values.pickupAddress.name}
          onChange={formik.handleChange}
          error={formik.touched.pickupAddress?.name && Boolean(formik.errors.pickupAddress?.name)}
          helperText={formik.touched.pickupAddress?.name && formik.errors.pickupAddress?.name}
        />

        <div className="flex gap-5">
          <TextField
            fullWidth
            name="pickupAddress.mobile"
            label="Mobile Number"
            variant="outlined"
            value={formik.values.pickupAddress.mobile}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.mobile && Boolean(formik.errors.pickupAddress?.mobile)}
            helperText={formik.touched.pickupAddress?.mobile && formik.errors.pickupAddress?.mobile}
          />
          <TextField
            fullWidth
            name="pickupAddress.pincode"
            label="Pin Code"
            variant="outlined"
            value={formik.values.pickupAddress.pincode}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.pincode && Boolean(formik.errors.pickupAddress?.pincode)}
            helperText={formik.touched.pickupAddress?.pincode && formik.errors.pickupAddress?.pincode}
          />
        </div>

        <TextField
          fullWidth
          name="pickupAddress.address"
          label="Address"
          variant="outlined"
          value={formik.values.pickupAddress.address}
          onChange={formik.handleChange}
          error={formik.touched.pickupAddress?.address && Boolean(formik.errors.pickupAddress?.address)}
          helperText={formik.touched.pickupAddress?.address && formik.errors.pickupAddress?.address}
        />

        <div className="flex gap-5">
          <TextField
            fullWidth
            name="pickupAddress.city"
            label="City"
            variant="outlined"
            value={formik.values.pickupAddress.city}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.city && Boolean(formik.errors.pickupAddress?.city)}
            helperText={formik.touched.pickupAddress?.city && formik.errors.pickupAddress?.city}
          />
          <TextField
            fullWidth
            name="pickupAddress.state"
            label="State"
            variant="outlined"
            value={formik.values.pickupAddress.state}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.state && Boolean(formik.errors.pickupAddress?.state)}
            helperText={formik.touched.pickupAddress?.state && formik.errors.pickupAddress?.state}
          />
        </div>

        <TextField
          fullWidth
          name="pickupAddress.locality"
          label="Locality"
          variant="outlined"
          value={formik.values.pickupAddress.locality}
          onChange={formik.handleChange}
          error={formik.touched.pickupAddress?.locality && Boolean(formik.errors.pickupAddress?.locality)}
          helperText={formik.touched.pickupAddress?.locality && formik.errors.pickupAddress?.locality}
        />
      </div>
    </Box>
  );
};

export default BecomeSellerFormStep2;
