import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = {
    children: ReactNode,
    onPress?: () => void
}

type ButtonTextProps = {
    children: ReactNode
}

type ButtonIconProps = {
    children: ReactNode
}

function Button({children, onPress,...rest}:ButtonProps){

    return(

        <TouchableOpacity className="bg-lime-400 rounded-md items-center justify-center flex-row"
        activeOpacity={0.7}
        onPress={onPress}
        {...rest as TouchableOpacityProps}>
            
            
        {children}

        </TouchableOpacity>



    )

}

function ButtonText({children}: ButtonTextProps) {
    return(

        <Text className="text-black font-heading text-base mx-2">{children}</Text>
    )

}

function ButtonIcon({children}: ButtonIconProps){
    return <>{children}</>

   

}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export   {Button}