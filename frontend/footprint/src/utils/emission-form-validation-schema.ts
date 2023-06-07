import * as Yup from 'yup';

export const CarbonEmissionFormSchema = Yup.object().shape({
    departure: Yup.string().required('Required'),
    destination: Yup.string().required('Required'),
    tripType: Yup.string().oneOf(['1', '2']).required('Required'),
    numOfTravelers: Yup.number().min(1).required('Required'),
});