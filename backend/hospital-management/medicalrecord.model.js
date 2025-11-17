import mongoose from "mongoose"

const medicalrecordSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    treatmentDuration: {
        type: String,
        required: true
    },
    atHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    treatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    totalBill: {
        type: String,
        required: true
    },
    medicinesIssued: {
        type: [
            {
                type: String,
                required: true
            }
        ]
    }


}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalrecordSchema)
